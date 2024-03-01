class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="pure-menu custom-display">
            <ul class="pure-menu-list">
                <li class="pure-menu-item">
                    <a href="/my-portfolio/index.html" class="pure-menu-link">About Me</a>
                </li>
                <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                    <a href="" class="pure-menu-link">Previous Academic Works</a>
                    <ul class="pure-menu-children">
                        <li class="pure-menu-item">
                            <a href="/my-portfolio/pages/PAW/algo.html" class="pure-menu-link">Algorithm Analysis and Design (C++)</a>
                        </li>
                        <li class="pure-menu-item">
                            <a href="/my-portfolio/pages/PAW/data-struc.html" class="pure-menu-link">Data Structure (C++)</a>
                        </li>
                        <li class="pure-menu-item">
                            <a href="/my-portfolio/pages/PAW/game-design.html" class="pure-menu-link">Game Design (ReactJS)</a>
                        </li>
                        <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                            <a href="" class="pure-menu-link">Unity Based Works</a>
                            <ul class="pure-menu-children">
                                <li class="pure-menu-item">
                                    <a href="/my-portfolio/pages/PAW/embed-game.html" class="pure-menu-link">Embedded Game Design and Development</a>
                                </li>
                                <li class="pure-menu-item">
                                    <a href="/my-portfolio/pages/PAW/online-game-dev.html" class="pure-menu-link">Online Game Development</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                    <a href="" class="pure-menu-link">Additional Works</a>
                    <ul class="pure-menu-children">
                        <li class="pure-menu-item">
                            <a href="/my-portfolio/pages/AW/python.html" class="pure-menu-link">Python & Selenium</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        `
    }
}

customElements.define('nav-bar', NavBar);