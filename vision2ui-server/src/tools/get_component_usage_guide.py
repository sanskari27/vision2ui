"""Tool for getting the component usage guide."""

from pathlib import Path


def get_component_usage_guide() -> str:
    """Get the component usage guide for AI agents.

    Returns the complete markdown guide on how to use components from the
    @fil-react-components library. This guide includes:
    - Component structure and file organization
    - NPM dependencies and installation patterns
    - Static content management
    - Component usage patterns
    - Styling guidelines (prefer Tailwind, minimize inline styles)
    - Responsive design guidelines
    - Storybook integration
    - Best practices

    Use this tool when you need guidance on how to properly use components
    from the @fil-react-components library when generating UI code.

    :return: The complete markdown contents of the component usage guide.
    :raises FileNotFoundError: If the guide file is not found.
    """
    # Get the directory where this file is located
    current_file = Path(__file__).resolve()
    tools_dir = current_file.parent
    # Go up to vision2ui-server root, then to prompts directory
    server_dir = tools_dir.parent
    prompts_dir = server_dir.parent / "prompts"
    guide_file = prompts_dir / "how-to-use-component.md"

    if not guide_file.exists():
        raise FileNotFoundError(f"Component usage guide not found at: {guide_file}")

    try:
        with open(guide_file, "r", encoding="utf-8") as f:
            content = f.read()
        return content
    except Exception as e:
        raise FileNotFoundError(f"Failed to read component usage guide: {str(e)}")
