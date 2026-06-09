<script lang="ts">
  import * as config from "$lib/config";
  import { Imprint } from "@computational-biology-aachen/design";
  import "../app.css";

  let { children } = $props();
</script>

<!-- SEO -->
<svelte:head>
  <title>2027 Photosynthesis School</title>
  <meta
    name="description"
    content={config.description}
  />
  <meta
    property="og:title"
    content={config.title}
  />
  <meta
    property="og:description"
    content={config.description}
  />
  <meta
    property="og:url"
    content={config.url}
  />
  <meta
    property="og:type"
    content="website"
  />
  <meta
    name="twitter:card"
    content="summary"
  />
</svelte:head>

{@render children()}

<Imprint github="https://github.com/photosynthesis-school/2027" />

<style>
  :global(.brand) {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 1rem;
  }
</style>
