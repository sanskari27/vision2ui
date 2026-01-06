"""Tool for getting full documentation for a fil-react-component."""

from services import ComponentService


def get_component_content(component_name: str) -> str:
    """Get full documentation for a fil-react-component.

    Returns the complete markdown documentation for a specific fil-react-component
    from the fil-react-component React UI component library. Use this tool when you
    need detailed information about how to use a specific fil-react-component,
    including its props, examples, and usage patterns.

    :param component_name: The fil-react-component name (e.g., "Button", "Card").
    :return: The complete markdown contents of the fil-react-component's metadata file.
    :raises ValueError: If the fil-react-component is not found.
    """
    service = ComponentService()
    return service.get_component_content(component_name)
