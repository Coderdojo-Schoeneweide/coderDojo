+++
title = "Newsletter"
description = "Melde Dich zum eMail-Newsletter des CoderDojo Schöneweide an, um regelmäßig über bevorstehende Workshops informiert zu werden."
keywords = ["Newsletter CoderDojo Schöneweide", "Newsletter", "eMail-Newsletter", "Updates", "aktuell"]
layout = "simple"
+++

Du bist Elternteil und möchtest immer über das aktuelle Veranstaltungsangebot des CoderDojo Schöneweide auf dem Laufenden gehalten werden? Dann melde dich für den E-Mail-Newsletter an! Dort bekommst du ein bis zwei Mal im Monat alle Infos zu unseren bevorstehenden Workshops.

<hr>
<form class="newsletter">
    <label>
        <span>Gib deine E-Mail-Adresse ein, um dich anzumelden:</span>
        <input type="email" name="email" placeholder="E-Mail-Adresse" />
    </label>
    <aside>Gib bitte deine E-Mail-Adresse für die Anmeldung an, z. B. abc@xyz.com.</aside>
    <label>
        <input type="checkbox" name="accept-privacy-policy" />
        <span>Ich möchte den Newsletter erhalten und akzeptiere die Datenschutzerklärung.</span>
    </label>
    <aside>Du kannst den Newsletter jederzeit über den Link in unserem Newsletter abbestellen.</aside>
    <p>
        Wir verwenden Brevo als unsere Marketing-Plattform. Indem du das Formular absendest, erklärst du dich einverstanden, dass die von dir angegebenen persönlichen Informationen an Brevo zur Bearbeitung übertragen werden gemäß den <a href="https://www.brevo.com/de/legal/privacypolicy/">Datenschutzrichtlinien von Brevo</a>.
    </p>
    <div class="frc-captcha" data-sitekey="FCMHLE7HBO6O0OM3"></div>
    <button class="button" disabled>Anmelden</button>
</form>
<p id="confirmation" hidden>
    Deine Anmeldung zum Newsletter wurde erfolgreich abgeschickt. Vielen Dank! Du erhältst in den nächsten Minuten eine Bestätigungsmail. Bitte klicke auf den Link in dieser Mail, um Deine Anmeldung zum Newsletter zu bestätigen.
</p>
<p id="error" hidden>
    Hoppla! Bei Deiner Anmeldung zum Newsletter ist ein Fehler aufgetreten. Bitte lade die Seite neu und versuche es erneut. Wenn der Fehler weiterhin auftritt, kontaktiere uns bitte unter <a href="mailto:schoeneweide.berlin@coderdojo.com">schoeneweide.berlin@coderdojo.com</a>.
</p>

<script type="module">
    import { FriendlyCaptchaSDK } from "/js/friendlycaptcha/sdk.min.js";

    const sdk = new FriendlyCaptchaSDK();

    const mount = document.querySelector(".frc-captcha");

    const captcha = sdk.createWidget({
        element: mount,
        sitekey: mount.dataset.sitekey
    });

    const form = document.querySelector('form.newsletter');

    function showError(error, code) {
        const errors = {
            "captcha-not-verified": "Beim Lösen des Captchas ist ein Fehler aufgetreten. Bitte lade die Seite neu und versuche es erneut.",
            "privacy-policy-not-accepted": "Die Datenschutzerklärung muss akzeptiert werden. Bitte lade die Seite neu und versuche es erneut.",
            "missing-email": "Es wurde keine E-Mail-Adresse angegeben. Bitte lade die Seite neu, gebe eine E-Mail-Adresse ein und versuche es erneut.",
        };
        const message = errors[code];
        console.error(error);
        form.hidden = true;
        const text = document.querySelector('p#error');
        if (message) text.innerText = message;
        text.hidden = false;
    }

    const submit = form.querySelector("button");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        submit.disabled = true;
        submit.innerText = "Anmeldung wird verarbeitet...";
        const data = new FormData(event.target);
        console.log(new URLSearchParams(data.entries()).toString());
        fetch("https://auth.kaes3kuch3n.de/newsletter", {
            method: "POST",
            body: new URLSearchParams(data.entries()).toString(),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(response => {
            if (response.ok) {
                form.hidden = true;
                document.querySelector('#confirmation').hidden = false;
            } else {
                response.text().then(code => showError(`${response.statusText} - ${code}`, code));
            }
        }).catch(error => {
            showError(error);
        });
    });

    const email = form.querySelector('[name="email"]');
    const privacyPolicy = form.querySelector('[name="accept-privacy-policy"]');

    const handleSubmitButtonState = () => submit.disabled = !privacyPolicy.checked || captcha.state !== 'completed' || !email.value;
    email.addEventListener('input', handleSubmitButtonState);
    privacyPolicy.addEventListener('change', handleSubmitButtonState);
    captcha.addEventListener('frc:widget.statechange', handleSubmitButtonState);
</script>
