<script lang="ts">
  import { resolve } from "$app/paths";
  import {
    CollapseToBurger,
    Navbar,
    NavItem,
  } from "@computational-biology-aachen/design";

  let { children } = $props();
</script>

<Navbar>
  {#snippet brand()}
    <span class="brand">Photosynthesis School 2027</span>
  {/snippet}
  <CollapseToBurger>
    <NavItem href={resolve("/")}>Home</NavItem>
    <NavItem href={resolve("committee")}>Scientific Committee</NavItem>
    <NavItem href={resolve("trainers")}>Trainers</NavItem>
    <NavItem href={resolve("participants")}>Participants</NavItem>
    <NavItem href={resolve("venue")}>Venue</NavItem>
    <NavItem href={resolve("info")}>Info</NavItem>
  </CollapseToBurger>
</Navbar>

{@render children()}

<style>
  .brand {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 1rem;
  }
</style>
