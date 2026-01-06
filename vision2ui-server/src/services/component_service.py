"""Component metadata service for fil-react-component library.

This service manages and retrieves metadata for fil-react-component React UI components.
"""

import logging
from pathlib import Path
from typing import ClassVar, Optional

logger = logging.getLogger(__name__)


class ComponentService:
    """Service for managing and retrieving fil-react-component metadata.

    This service provides access to component documentation from the fil-react-component
    React UI component library. It loads metadata files and provides methods to list
    and retrieve component documentation.
    """

    _instance: ClassVar["ComponentService | None"] = None

    def __new__(cls, *args, **kwargs):  # type: ignore[override]
        """Implement a simple singleton pattern.

        Any call to ComponentService(...) will return the same instance.
        """
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self, metadata_dir: Optional[Path] = None) -> None:
        """Initialize the component service.

        :param metadata_dir: Path to the metadata directory. If None, uses default location.
        """
        # Avoid re-running initialization when the singleton is requested multiple times
        if getattr(self, "_initialized", False):
            return

        if metadata_dir is None:
            # Default to data/metadata relative to the project root
            metadata_dir = Path(__file__).parent.parent.parent / "data" / "components"
        print(f"Loading components from {metadata_dir}")
        self.metadata_dir = Path(metadata_dir)
        self._components: dict[str, Path] = {}
        self._load_components()
        self._initialized = True

    def _load_components(self) -> None:
        """Load all fil-react-component metadata files into the in-memory index."""
        self._components.clear()
        if not self.metadata_dir.is_dir():
            return

        for md_file in self.metadata_dir.glob("*.md"):
            # File names are of the form Button-3.4.2.md → component name "Button"
            name = md_file.stem.split("-")[0]
            self._components[name] = md_file

    def list_components(self) -> list[str]:
        """List all available fil-react-component names.

        Returns a sorted list of all fil-react-component names available in the
        metadata directory.

        :return: Sorted list of fil-react-component names.
        """
        self._load_components()  # Refresh index in case files changed
        return sorted(self._components.keys())

    def get_component_content(self, component_name: str) -> str:
        """Get the full documentation for a fil-react-component.

        Retrieves the complete markdown documentation for a specific fil-react-component
        from the React UI component library.

        :param component_name: The fil-react-component name (e.g., "Button").
        :return: The complete markdown contents of the component's metadata file.
        :raises ValueError: If the fil-react-component is not found.
        """
        self._load_components()  # Refresh index in case files changed
        if component_name not in self._components:
            raise ValueError(f"fil-react-component '{component_name}' not found.")

        return self._components[component_name].read_text(encoding="utf-8")

    def component_exists(self, component_name: str) -> bool:
        """Check if a fil-react-component exists.

        :param component_name: The fil-react-component name to check.
        :return: True if the fil-react-component exists, False otherwise.
        """
        self._load_components()
        return component_name in self._components

    def add_component(self, filename: str, content: str) -> str:
        """Add a new component documentation file.

        Validates the filename format (<component_name>-<version>.md) and saves
        the content to the metadata directory.

        :param filename: The filename in format <component_name>-<version>.md
        :param content: The markdown content of the component documentation
        :return: The component name extracted from the filename
        :raises ValueError: If the filename format is invalid or file already exists
        """
        # Validate filename format: <component_name>-<version>.md
        if not filename.endswith('.md'):
            raise ValueError("Filename must have .md extension")
        
        # Extract component name and version
        name_with_version = filename[:-3]  # Remove .md
        parts = name_with_version.split('-')
        
        if len(parts) < 2:
            raise ValueError("Filename must be in format <component_name>-<version>.md")
        
        # Component name is everything before the last hyphen
        component_name = '-'.join(parts[:-1])
        version = parts[-1]
        
        # Ensure metadata directory exists
        self.metadata_dir.mkdir(parents=True, exist_ok=True)
        
        # Check if file already exists
        file_path = self.metadata_dir / filename
        if file_path.exists():
            raise ValueError(f"Component file '{filename}' already exists")
        
        # Write the file
        file_path.write_text(content, encoding="utf-8")
        
        # Reload components to include the new one
        self._load_components()
        
        logger.info(f"Added component: {component_name} (version {version}) from {filename}")
        return component_name
