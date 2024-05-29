const gsp = () => {
  gsap.registerPlugin(ScrollTrigger);

	gsap.utils.toArray('.network__image').forEach((block, i) => {
		gsap.fromTo(
			block,
			{ opacity: 0, y: 100 },
			{
				opacity: 1,
				y: 0,
				scrollTrigger: {
					trigger: block,
					start: 'top 80%',
					end: 'top 30%',
					scrub: true,
					markers: true,
				},
			}
		)
	})
}

export default gsp;
