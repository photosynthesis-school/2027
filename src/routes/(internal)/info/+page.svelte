<script>
	import { base } from '$app/paths';
	import Header from '$lib/pico/sections/Header.svelte';
	import Main from '$lib/pico/sections/Main.svelte';
	import Section from '$lib/pico/sections/Section.svelte';
	import H1 from '$lib/pico/text/H1.svelte';
	import H2 from '$lib/pico/text/H2.svelte';
	import H6 from '$lib/pico/text/H6.svelte';
	import Text from '$lib/pico/text/Text.svelte';
	import R2 from '$lib/R2.svelte';
</script>

<Header>
	<H1 color="white">Info</H1>
</Header>

<Main>
	<Section>
		<R2>
			<img
				class="hide-on-sm"
				src="{base}/people-working.png"
				alt="people working" />
			<div>
				<H2 color="secondary">Important dates</H2>
				<H6 color="secondary">Date of the school</H6>
				<Text>???</Text>

				<H6 color="secondary">Registration closes</H6>
				<Text>???</Text>

				<H6 color="secondary">Shortlisting</H6>
				<Text>???</Text>

				<H6 color="secondary">Announcements</H6>
				<Text>???</Text>

				<!-- <br />
				<BtnGrp
					disabled
					href="/">Register</BtnGrp> -->
			</div>
		</R2>
	</Section>
</Main>

<style>
	img {
		display: block;
		max-width: 100%;
		margin: 0 auto 1rem;
	}
	.hide-on-sm {
		display: none;
	}
	@media (min-width: 64rem) {
		.hide-on-sm {
			display: block;
		}
	}
</style>
