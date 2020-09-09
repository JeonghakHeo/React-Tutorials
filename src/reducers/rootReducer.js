const initState = {
  posts: [
    {id: '1', title: 'Squirtle laid an Egg', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus incidunt expedita tempora laboriosam quae aliquam omnis aliquid error repudiandae ad itaque corporis tempore suscipit, pariatur dolorum commodi, recusandae veritatis dolor?'},
    {id: '2', title: 'Charmander Laid an Egg', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus incidunt expedita tempora laboriosam quae aliquam omnis aliquid error repudiandae ad itaque corporis tempore suscipit, pariatur dolorum commodi, recusandae veritatis dolor?'},
    {id: '3', title: 'a Helix Fossil was Found', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus incidunt expedita tempora laboriosam quae aliquam omnis aliquid error repudiandae ad itaque corporis tempore suscipit, pariatur dolorum commodi, recusandae veritatis dolor?'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer