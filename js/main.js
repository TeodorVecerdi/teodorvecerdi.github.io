const dark_css = `<span class="fa-stack fa-2x" title="Dark Theme">
        <i class="fas fa-circle fa-stack-2x text-primary"></i>
        <i class="fas fa-moon fa-stack-1x text-light" data-fa-transform="grow-2.5 left-1"></i>
    </span>`;

const light_css = `<span class="fa-stack fa-2x" title="Light Theme">
        <i class="fas fa-circle fa-stack-2x text-primary"></i>
        <i class="fas fa-lightbulb fa-stack-1x text-light" data-fa-transform="grow-3"></i>
    </span>`;

const system_css = `<span class="fa-stack fa-2x" title="System Theme">
        <i class="fas fa-circle fa-stack-2x text-primary"></i>
        <i class="{0} fa-stack-1x text-light" data-fa-transform="grow-3 left-1"></i>
    </span>`

function applyTheme() {
    let preferredTheme = localStorage.getItem('theme');
    if(!preferredTheme) {
        preferredTheme = 'system';
        localStorage.setItem('theme', preferredTheme);
    }
    let toggleCss = null;

    switch (preferredTheme) {
        case "dark":
            toggleCss = dark_css;
            $('body').addClass('dark');
            break;
        case "light":
            $('body').addClass('light');
            toggleCss = light_css;
            break;
        default:
        case "system":
            toggleCss = system_css.formatUnicorn(getThemeIcon(getOS()))
            break;
    }

    $('#theme-toggle').html(toggleCss);
}

function toggleTheme() {
    let preferredTheme = localStorage.getItem('theme');
    if(preferredTheme === 'dark') {
        $('body').removeClass('dark')
        preferredTheme = 'light';
    } else if (preferredTheme === 'light') {
        $('body').removeClass('light')
        preferredTheme = 'system';
    } else if (preferredTheme === 'system') {
        preferredTheme = 'dark';
    }
    localStorage.setItem('theme', preferredTheme);

    applyTheme();
}

$(() => {
    applyTheme();
    $('#theme-toggle').on('click', () => {
        toggleTheme();
    });
});