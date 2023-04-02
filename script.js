const harryPotter = {
    firstName: 'Harry',
    lastName: 'Potter',
    hairColor: 'black'
}

const hermioneGranger = {
    firstName: 'Hermione',
    lastName: 'Granger',
    hairColor: 'brown'
}

const ronWeasley = {
    firstName: 'Ron',
    lastName: 'Weasley',
    hairColor: 'red'
}

const renderWizards = () => {
    document.getElementById('harry').innerHTML =
        `<span style="color:${harryPotter.hairColor}">${harryPotter.firstName} ${harryPotter.lastName}</span>`
    document.getElementById('hermione').innerHTML =
        `<span style="color:${hermioneGranger.hairColor}">${hermioneGranger.firstName} ${hermioneGranger.lastName}</span>`
    document.getElementById('ron').innerHTML =
        `<span style="color:${ronWeasley.hairColor}">${ronWeasley.firstName} ${ronWeasley.lastName}</span>`
}

document.addEventListener('keydown', (event) => {
    event.key == 'x' || event.key == 'X' ? renderWizards() : null
})