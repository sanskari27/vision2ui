"""MCP server implementation for vision2ui fil-react-component metadata.

This server uses stdio transport and is designed for integration with
editors like Cursor and VS Code. It provides access to fil-react-component
React UI component library documentation.
"""

from mcp.server.fastmcp import FastMCP
from tools import (
	get_component_content,
	get_component_usage_guide,
	list_components,
)

# Create an MCP server instance named "vision2ui"
mcp = FastMCP("vision2ui")

# Register tools from the tools module
mcp.tool()(list_components)
mcp.tool()(get_component_content)
mcp.tool()(get_component_usage_guide)


def run() -> None:
    """Start the vision2ui MCP server using stdio transport (for editor integration).

    This server provides access to fil-react-component React UI component library
    documentation for AI agents in editors like Cursor and VS Code.
    """
    mcp.run(transport="stdio")


if __name__ == "__main__":
    run()
