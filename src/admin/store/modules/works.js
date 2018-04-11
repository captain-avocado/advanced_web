const works = {
    state: {
        data: [],
    },
    mutations: {
        addWork(state, work) {
            state.data.push(work);
        },
    },
    actions: {
        fetchSkills({state}) {
            fetch('data-works.json').then(data => {
                return data.json();
            }).then(responce => {
                state.data = responce;
            });
        },
    },
};

export default works;