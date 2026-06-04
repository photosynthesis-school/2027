<script>
	import { base } from '$app/paths';
	import {
		Grid,
		H1,
		H2,
		H6,
		Section,
		SectionHeader,
		SectionMain,
		Text
	} from '@computational-biology-aachen/design';
</script>

<svelte:head>
	<title>Info - 2027 Photosynthesis School</title>
</svelte:head>

<SectionHeader>
	<H1 color="light">Info</H1>
</SectionHeader>

<SectionMain align="start">
	<Section pad="no">
		<Grid columns={2}>
			<img class="hide-on-sm" src="{base}/people-working.png" alt="people working" />
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
			</div>
		</Grid>
	</Section>
</SectionMain>

<style>
	.hide-on-sm {
		display: none;
	}
	@media (min-width: 64rem) {
		.hide-on-sm {
			display: block;
			max-width: 100%;
			margin: 0 auto 1rem;
		}
	}
</style>
