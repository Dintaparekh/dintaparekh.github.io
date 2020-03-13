document.getElementsByClassName('dp_header_action_btn_container')[0].addEventListener('click', (ev) => {
    if (ev.target.dataset.id) {
        window.open(`#${ev.target.dataset.id}`, '_self');
    }
})

function openLink(link) {
    window.open(link, '_blank');
}