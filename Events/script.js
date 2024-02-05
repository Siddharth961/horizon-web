function showModal(card) {
    let modalContent = document.getElementById('modalContent');
    let modalLabel = document.getElementById('cardModalLabel');

    if (card === 'card1') {
        modalLabel.innerHTML = 'AIPPM 2.0';
        modalContent.innerHTML = "The Horizon Society orchestrated a dynamic All India Political Parties Meet (AIPPM) at college, fostering informed political discourse on the agenda of evaluating the role of religious communalism in Indian Politics. This Model United Nations (MUN) platform provided a forum for diverse political ideologies, promoting unity, understanding, and civic engagement. The event empowered participants, representing Indian politicians and individuals, to actively shape the nation's political landscape through constructive dialogue and collaboration.";
    } else if (card === 'card2') {
        modalLabel.innerHTML = 'Word Warriors';
        modalContent.innerHTML = "The Word Warrior, a unique 1-to-1 Oxford-style debate hosted by Debating Society Horizon in collaboration with TEDXBVCOE and EDUMINERVA at BVEST’23 the Technical fest at Bharati Vidyapeeth’s College of Engineering, concluded with vibrant discourse. Aimed at fostering critical thinking and eloquence, the event showcased intellectual prowess and enhanced participants' oratory and argumentative skills. The engaging competition, featuring rounds like G20 Discussions and Devil's Advocate, successfully promoted a culture of constructive dialogue and intellectual exchange within the college community, with the winner receiving a prize of 2000 rupees.";
    } else if (card === 'card3') {
        modalLabel.innerHTML = 'Week of Journalism';
        modalContent.innerHTML = "The Week of Journalism, an initiative by HORIZON_BVP, unfolded throughout the entire first week of May 2023. This innovative event featured members of the society expressing their perspectives and sharing information on a given topic through engaging Instagram reels. Each day of the week brought forth a unique theme or focus, allowing participants to creatively present their views and insights. This platform not only showcased the diverse talents within the society but also fostered a dynamic and informative exchange of ideas in a visually appealing format. The Week of Journalism underscored the society's commitment to embracing modern communication channels and promoting meaningful discussions within the community.";
    } else if (card === 'card4') {
        modalLabel.innerHTML = 'Public Speaking Workshop';
        modalContent.innerHTML = "The Horizon Debating Society successfully conducted a public speaking workshop to empower individuals in overcoming the fear of public speaking. With the objective of enhancing communication skills, the event focused on fostering confidence and articulation. Participants gained insights into the importance of effective public speaking, equipping them with valuable skills for personal and professional growth. The workshop concluded with participants demonstrating improved public speaking abilities, reflecting the event's success in achieving its goals.";
    }

    $('#cardModal').modal('show');
z}