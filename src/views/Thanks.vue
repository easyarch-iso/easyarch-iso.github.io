<template>
  <div>
    <b-container fluid class="pl-0 ml-0 pr-0 mr-0">
      <b-row class="justify-content-center">
        <b-col cols="12" md="10">
          <b-card
            header="Thanks to"
            header-bg-variant="primary"
            header-text-variant="light"
            header-tag="h3"
          >
            <b-card-body>
              <p>
                First of all thanks to the people behind the awesome
                <a
                  href="http://wiki.archlinux.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Arch Linux Wiki</a
                >. Without their effort we wouldn't have the richest linux
                distro wiki.
              </p>
              <p>
                A big thanks to Erik Dubois. Check out his
                <a
                  href="https://www.youtube.com/channel/UCJdmdUp5BrsWsYVQUylCMLg"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Youtube Channel</a
                >
                for tons of videos about linux distributions. If you want to
                roll out your own linux distribution there is no better place to
                look at. Also check out his
                <a
                  href="https://github.com/erikdubois"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Github Repositories</a
                >
                for a lot of examples and helpful docs.
              </p>
              <p>
                Really grateful to the team behind
                <a
                  href="https://calamares.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Calamares project</a
                >. Check out the
                <a
                  href="https://github.com/calamares"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Official Calamares Repo</a
                >. This is the installer framework used to build EasyArch
                installer.
              </p>

              <p>Thanks to the theme creators -</p>
              <ul>
                <li v-for="(theme, index) in themes" :key="index">
                  {{ theme["kind"] }} - <q>{{ theme["name"] }}</q> by
                  {{ theme["creator"] }}. Source -
                  <a :href="theme['link']" target="_blank">{{
                    theme["link_text"]
                  }}</a>
                </li>
              </ul>

              <p>
                Thanks to Jahedul Haque,
                <a href="https://www.peakpx.com/" target="_blank"
                  >https://www.peakpx.com/</a
                >,
                <a
                  href="https://unsplash.com/images/stock/royalty-free"
                  target="_blank"
                  >https://unsplash.com/images/stock/royalty-free</a
                >
                for the nice wallpaper collection.
              </p>

              <p>
                Finally thanks to everyone who is trying out EasyArch and
                supporting the project.
              </p>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themes: [
        {
          name: "Materia",
          kind: "Gtk theme",
          creator: "nana-4",
          link:
            "https://www.archlinux.org/packages/community/any/materia-gtk-theme/",
          link_text: "Archlinux community repo"
        },
        {
          name: "McHigh Sierra",
          kind: "Gtk theme",
          creator: "vinceliuice",
          link: "https://www.gnome-look.org/p/1013714/",
          link_text: "Gnome-look"
        },
        {
          name: "Windows 10, 7, XP, 95",
          kind: "Gtk themes",
          creator: "B00merang Project",
          link: "https://github.com/B00merang-Project",
          link_text: "Github"
        },
        {
          name: "Adwaita++",
          kind: "Icon theme",
          creator: "Bonandry",
          link: "https://www.gnome-look.org/s/Gnome/p/1302858",
          link_text: "Gnome Look"
        },
        {
          name: "McMojave circle",
          kind: "Icon theme",
          creator: "vinceliuice",
          link: "https://www.opendesktop.org/p/1305429/",
          link_text: "Opendesktop"
        },
        {
          name: "Windows 10, 7, XP, 95",
          kind: "Icon themes",
          creator: "B00merang Artwork",
          link: "https://github.com/B00merang-Artwork",
          link_text: "Github"
        }
      ]
    };
  }
};
</script>
