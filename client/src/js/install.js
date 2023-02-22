const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {

    //Storing Events
    window.deferredPrompt = event;

    //Remove hidden class
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    
    const promptEvent = window.deferredPrompt;

    if(!promptEvent) {
        return;
    }

    //Prompt is shown
    promptEvent.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    //Prompt is cleared
    window.deferredPrompt = null;
});