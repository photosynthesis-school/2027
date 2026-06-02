<script lang="ts">
	import { base } from '$app/paths';
	import { CollapseToBurger, Navbar, NavItem } from '@computational-biology-aachen/design';

	let { children } = $props();
</script>

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

{@render children()}

<style>
	.brand {
		color: var(--color-primary);
		font-weight: 600;
		font-size: 1rem;
	}
</style>
