---
slug: website
title: Website
authors: [ernest_o_lawrence]
tags: [journal]
---

We're building a website using Docusaurus.

<!-- truncate -->

The website includes an engineering journal. In it, we can embed code snippets having highlighted portions, like this:

```py {7-8}
def negate(n: int) -> int:
    r"""Negates the specified integer."""
    return -1 * n


# Print the negated number of things.
num_things = 123
num_things_negated = negate(123)
print(num_things_negated)
```

Group members can use this to write about projects they've worked on. That can help disseminate knowledge and
help with SEO.
