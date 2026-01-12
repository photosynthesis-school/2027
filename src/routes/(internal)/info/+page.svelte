<script>
	import { base } from '$app/paths';
	import BtnGrp from '$lib/BtnGrp.svelte';
	import Link from '$lib/pico/Link.svelte';
	import Li from '$lib/pico/lists/Li.svelte';
	import Ul from '$lib/pico/lists/Ul.svelte';
	import Header from '$lib/pico/sections/Header.svelte';
	import Main from '$lib/pico/sections/Main.svelte';
	import Section from '$lib/pico/sections/Section.svelte';
	import Bold from '$lib/pico/text/Bold.svelte';
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

				<br />
				<BtnGrp
					disabled
					href="/"
					>Register</BtnGrp>
			</div>
		</R2>
	</Section>
	<Section color="secondary">
		<H2 color="white">Organizing Committee</H2>
		<Ul>
			<Li color="white"
				><Link
					color="white"
					href="https://computational-biology-aachen.github.io/team/anna-matuszy%C5%84ska"
					>Prof. Dr. Anna Matuszyńska, RWTH Aachen, Germany</Link
				>
			</Li>
		</Ul>
	</Section>
	<Section>
		<H2>Program overview</H2>
		<Text>The event runs over <Bold>? days</Bold>:</Text>
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
