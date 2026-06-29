<script lang="ts">
  import { base } from "$app/paths";
  import {
    Bold,
    Button,
    CollapseToBurger,
    H1,
    Hero,
    Navbar,
    NavItem,
    Row,
    Section,
    Text,
  } from "@computational-biology-aachen/design";
</script>

<svelte:head>
  <title>2027 Photosynthesis School</title>
</svelte:head>

<Navbar>
  {#snippet brand()}
    <span class="brand">Photosynthesis School 2027</span>
  {/snippet}
  <CollapseToBurger>
    <NavItem href="{base}/">Home</NavItem>
    <NavItem href="{base}/committee">Scientific Committee</NavItem>
    <NavItem href="{base}/trainers">Trainers</NavItem>
    <NavItem href="{base}/participants">Participants</NavItem>
    <NavItem href="{base}/venue">Venue</NavItem>
    <NavItem href="{base}/info">Info</NavItem>
  </CollapseToBurger>
</Navbar>

<Hero src="{base}/hero.jpg">
  <h1 class="hero-title">Photosynthesis School 2027</h1>
</Hero>

<Section
  variant="light"
  width="narrow"
>
  <H1 color="primary">Photosynthesis School 2027</H1>
  <Text>Here we will add some description</Text>
  <Text><Bold>When?</Bold> ...</Text>
  <Text><Bold>Where?</Bold> ...</Text>
  <Text><Bold>Registration opens?</Bold> ...</Text>
  <Text><Bold>Registration open until?</Bold>...</Text>
  <Row
    wrap
    gap="var(--space-3)"
  >
    <Button href="{base}/committee">Scientific committee</Button>
    <Button href="{base}/trainers">Trainers</Button>
    <Button href="{base}/participants">Participants</Button>
    <Button href="{base}/venue">Venue</Button>
    <Button href="{base}/info">General Info</Button>
    <Button disabled>Register</Button>
  </Row>
</Section>

<style>
  .brand {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 1rem;
  }

  .hero-title {
    color: var(--color-bg);
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 3rem;
    padding: 0;
    margin: 0 0 0.5rem 0;
    max-width: 30rem;
  }

  @media (min-width: 64rem) {
    .hero-title {
      font-size: 5rem;
    }
  }
</style>
