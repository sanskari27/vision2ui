"""Tools module for vision2ui MCP server.

This module contains all MCP tools that can be registered with the server.

Each tool is responsible for obtaining its own `ComponentService` instance.
`ComponentService` itself is implemented as a singleton, so all callers share
the same underlying instance.
"""

from .get_component_content import get_component_content
from .get_component_usage_guide import get_component_usage_guide
from .list_components import list_components

__all__ = ["list_components", "get_component_content", "get_component_usage_guide"]
