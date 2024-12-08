#!/usr/bin/env python3
"""Module for function that returns asyncio.Task"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Function that returns asyncio.Task"""
    task = asyncio.create_task(wait_random(max_delay))
    return task
