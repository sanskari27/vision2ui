"""Tool for listing all available fil-react-component names."""

from services import ComponentService


def list_components() -> list[str]:
    """List all available fil-react-component names.

    Returns a sorted list of all fil-react-component names from the
    fil-react-component React UI component library present in the data/metadata folder.

    Use this tool when you need to know what fil-react-component components are
    available in the library.

    :return: Sorted list of fil-react-component names.
    """
    service = ComponentService()
    return service.list_components()
