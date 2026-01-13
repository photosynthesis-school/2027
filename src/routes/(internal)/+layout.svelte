<script lang="ts">
	import { base } from '$app/paths';
	import Nav from '$lib/nav/Nav.svelte';
	import NavItem from '$lib/nav/NavItem.svelte';

	let { children } = $props();
</script>

<Nav>
	<NavItem
		href="{base}/"
		name="Home" />
	<NavItem
		href="{base}/committee"
		name="Scientific Committee" />
	<NavItem
		href="{base}/trainers"
		name="Trainers" />
	<NavItem
		href="{base}/participants"
		name="Participants" />
	<NavItem
		href="{base}/venue"
		name="Venue" />
	<NavItem
		href="{base}/info"
		name="Info" />
</Nav>

{@render children()}
