<template>
  <div>
    <b-row
      class="justify-content-center"
      v-for="(release, index) in releases"
      :key="index"
    >
      <b-col cols="12" md="10" class="pb-3">
        <b-card
          :header="release['title']"
          header-bg-variant="primary"
          header-text-variant="light"
          header-tag="h4"
        >
          <div v-if="release['features']">
            <h5 class="text-success">Features</h5>

            <ul>
              <li
                v-for="(feature, index) in release['features']"
                :key="index"
                v-html="feature"
              ></li>
            </ul>
          </div>

          <div v-if="release['bugfixes']">
            <h5 class="text-warning">Bugfixes</h5>

            <ul>
              <li
                v-for="(bugfix, index) in release['bugfixes']"
                :key="index"
                v-html="bugfix"
              ></li>
            </ul>
          </div>

          <div v-if="release['bugs']">
            <h5 class="text-danger">Known Bugs</h5>

            <ul>
              <li
                v-for="(bug, index) in release['bugs']"
                :key="index"
                v-html="bug"
              ></li>
            </ul>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      releases: [
        {
          title: "EasyArch 2020.10",
          features: [
            "More modern desktop theme",
            "New wallpapers",
            "New and more modern login screen/display manager theme",
            "Added more software for more complete desktop experience",
            "Updated installer code to the latest version of calamares itself",
            "Simple GUI (Gtk+ 3 based) to allow user easily customize the " +
              "desktop layout and " +
              "theme. This includes some pre-defined layouts and themes. Themes " +
              "include - windows 10, windows 7, windows xp, windows 95, mac os " +
              "like themes. The configuration app can be found under - Settings " +
              "-> Personal -> EasyArch Config.",
            "Resolution changer application for virtual machines is now " +
              "integrated with the configuration application.",
            "All applications and libraries are updated to the latest " +
              "versions as of the release date."
          ],
          bugfixes: [
            "Pacman pgp keys are populated correctly while installing. It is " +
              "no longer required to populate keys manually.",
            "Installer now shows proper progress while installing additional " +
              "packages."
          ],
          bugs: [
            "There is a left-over package from the installer image - <code>" +
              "mkinitcpio-archiso</code>. This results in failure of booting any " +
              "kernel other than the default one. Fix - <br><code>sudo pacman " +
              "-Rns mkinitcpio-archiso --noconfirm</code>",
            "In virtual machines, applied resolution through the resolution " +
              "changer app does not persist. Fix - apply resolution using " +
              "Settings -> Hardware -> Display."
          ]
        },
        {
          title: "EasyArch 2020.8",
          features: [
            "First release",
            "Customized calamares installer",
            "Provides options to install in offline or online mode",
            "Facility to install archlinux in both online and offline mode",
            "Pre-configured XFCE 4 desktop",
            "Minimal set of software",
            "Included graphical package installer (pamac)",
            "Simple GUI (Qt5 based) to detect virtual machine " +
              "and allow user to quickly set the display resolution"
          ],
          bugs: [
            "Installer removes pacman pgp keys. Fix - " +
              "<br><code>sudo pacman-key --init; " +
              "sudo pacman-key --populate archlinux</code>",
            "Installer does not show progress while installing " +
              "additional software selected at package selection stage."
          ]
        }
      ]
    };
  }
};
</script>
