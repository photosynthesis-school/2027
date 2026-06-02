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

<SectionHeader>
	<H1 color="light">Contact us</H1>
</SectionHeader>

<SectionMain align="start">
	<Section pad="no">
		<Grid columns={2}>
			<img class="hide-on-sm" src="{base}/people-working.png" alt="people working" />
			<div>
				<H2 color="secondary">You can find us at</H2>

				<H6 color="secondary">EMAIL</H6>
				<Text>anna.matuszynska@cpbl.rwth-aachen.de</Text>

				<H6 color="secondary">LOCATION</H6>
				<Text>RWTH, Worringerweg 1, 52074 Aachen</Text>

				<H6 color="secondary">IMPRINT</H6>
				<Text>
					Anbieter i.S.d. TDG/MDStV: Prof. Dr. Anna B. Matuszyńska <br />
					Worringerweg 1 52074 Aachen <br />
					Work Phone: +49 241 80 25817 <br />

					Verantwortlich i.S.d. § 6 Abs. 2 MDStV: <br />
					Prof. Dr. Anna B. Matuszyńska <br />
					Design und Umsetzung Dr. Marvin van Aalst<br />
					(c) 2025 Prof. Dr. Anna B. Matuszyńska, Alle Rechte vorbehalten.
				</Text>
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
