# `Obywatelu Towarzyszu!` PC board game

## Table of Contents

- [System Requirements](#System-Requirements)
- [Description](#Description)

---
## Description:
[pl] Zabawna gra planszowa w klimatach PRL-u. Tworzona w Next.js

[eng] Funny pc board game that takes place in Polish People's Republic. Project is being created in Next.js

---
## System Requirements

- `git` v2.31 or greater
- `NodeJS` v14.16.0 or greater
- `npm` v7.7.5 or greater

```bash
git --version
node --version
npm --version
```

---

### Notes from example withStyledComponents next.js

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`;
```

**pages/index.js**

```javascript
import StyledLink from '../components/StyledLink';

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
);
```

</details>

---
## Contributors

<table>
  <tr>
<td  align="left"><a href="https://github.com/42Matt">
<img src="https://github.com/42Matt.png" width="100px;" alt=""/><br />
<sub><b>Mateusz Dziadosz</b></sub></a><br />
<a href="https://github.com/42Matt" title="Code">💻</a>
<a href="" title="Documentation">📖</a>
</td>

<td  align="left"><a href="https://github.com/MaciejMichalski92">
<img src="https://github.com/MaciejMichalski92.png" width="100px;" alt=""/><br />
<sub><b>Maciej Michalski</b></sub></a><br />
<!-- <a href="https://github.com/MaciejMichalski92" title="Code">💻</a>
<a href="" title="Documentation">📖</a> -->
</td>

</tr></table>
