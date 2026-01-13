<script>
	import { resolve } from '$app/paths';
	import BtnGrp from '$lib/BtnGrp.svelte';
	import ButtonGroup from '$lib/ButtonGroup.svelte';
	import Footer from '$lib/Footer.svelte';
	import Hero from '$lib/Hero.svelte';
	import Section from '$lib/pico/sections/Section.svelte';
	import Bold from '$lib/pico/text/Bold.svelte';
	import H1 from '$lib/pico/text/H1.svelte';
	import Text from '$lib/pico/text/Text.svelte';
</script>

<svelte:head>
	<title>Photosynthesis hackathon</title>
</svelte:head>

<Hero />
<Section color="white">
	<div>
		<H1 color="secondary">Photosynthesis School 2027</H1>
		<Text>Here we will add some description</Text>
		<Text><Bold>When?</Bold> ...</Text>
		<Text><Bold>Where?</Bold> ...</Text>
		<Text><Bold>Registration opens?</Bold> ...</Text>
		<Text><Bold>Registration open until?</Bold>...</Text>
		<!-- <Text
			>📅 Apply now and be part of a new community driving innovation at the
			intersection of genetics, physiology, and data.</Text> -->
	</div>
	<ButtonGroup>
		<BtnGrp href={resolve('/committee')}>Scientific committee</BtnGrp>
		<BtnGrp href={resolve('/trainers')}>Trainers</BtnGrp>
		<BtnGrp href={resolve('/participants')}>Participants</BtnGrp>
		<BtnGrp href={resolve('/venue')}>Venue</BtnGrp>
		<BtnGrp href={resolve('/info')}>General Info</BtnGrp>
		<!-- <BtnGrp href="https://forms.gle/MXxyyvYGtWpdVGN46">Apply</BtnGrp> -->
		<BtnGrp
			disabled
			href="/">Register</BtnGrp>
	</ButtonGroup>
</Section>

<Footer />

<style>
</style>
