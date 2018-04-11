const papers = {
    state: {
        data: [],
    },
    mutations: {
        addPaper(state, paper) {
            state.data.push(paper);
            console.log('paper successfully added!');
            console.log(state.data);
        },
    },
    actions: {
        fetchSkills({state}) {
            // console.log('action is emitted');
            fetch('data-papers.json').then(data => {
                return data.json();
            }).then(responce => {
                state.data = responce;
            });
            // state = 
            // dispatch('')
            // commit('')
        },
    },
};

export default papers;