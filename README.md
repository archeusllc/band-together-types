# @archeusllc/types

API client types for Band Together - auto-generated Eden Treaty types from the Elysia API server.

## Overview

This package contains TypeScript type definitions for the Band Together API, exported from the Elysia server using the `elysia-remote-dts` plugin.

## Type Generation

The `server.d.ts` file is auto-generated from the running API server:

```bash
cd ../api
bun start                    # Start the API server
bun run generate            # Generate types to ../types/server.d.ts
```


## Usage

In your client application:

```typescript
import { edenTreaty } from '@elysiajs/eden';
import type { App } from '@archeusllc/types/server';

const api = edenTreaty<App>('http://localhost:3000');

// Full type safety with autocomplete
const events = await api.events.get();
const event = await api.events[eventId].get();
```

## Publishing

This package is published to GitHub Packages and auto-updated via GitHub Actions whenever `server.d.ts` changes.

**Credentials required**: Add to `.npmrc`:
```
@archeusllc:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<YOUR_GITHUB_TOKEN>
```

## Dependencies

No external dependencies. This package contains only type definitions.

## License

MIT
