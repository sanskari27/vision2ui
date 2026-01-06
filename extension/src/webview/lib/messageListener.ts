type MessageCallback = (event: MessageEvent) => void;

class MessageListener {
	private listeners = new Map<string, Set<MessageCallback>>();
	private isInitialized = false;

	constructor() {
		this.init();
	}

	private init() {
		if (this.isInitialized) {
			return;
		}

		window.addEventListener('message', (event: MessageEvent) => {
			const command = event.data?.command;
			if (command && this.listeners.has(command)) {
				const callbacks = this.listeners.get(command);
				if (callbacks) {
					callbacks.forEach((callback) => {
						callback(event);
					});
				}
			}
		});

		this.isInitialized = true;
	}

	/**
	 * Subscribe to messages with a specific command name
	 * @param commandName The command name to listen for (event.data.command)
	 * @param callback The callback function to execute when the command is received
	 * @returns An unsubscribe function to remove the listener
	 */
	subscribe(commandName: string, callback: MessageCallback): () => void {
		if (!this.listeners.has(commandName)) {
			this.listeners.set(commandName, new Set());
		}

		const callbacks = this.listeners.get(commandName)!;
		callbacks.add(callback);

		// Return unsubscribe function
		return () => {
			callbacks.delete(callback);
			if (callbacks.size === 0) {
				this.listeners.delete(commandName);
			}
		};
	}

	/**
	 * Remove all listeners for a specific command
	 */
	unsubscribeAll(commandName: string): void {
		this.listeners.delete(commandName);
	}

	/**
	 * Remove all listeners
	 */
	clear(): void {
		this.listeners.clear();
	}
}

// Export singleton instance
export const messageListener = new MessageListener();
