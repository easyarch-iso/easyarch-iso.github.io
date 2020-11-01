<template>
  <div>
    <b-container fluid class="pl-0 ml-0 pr-0 mr-0">
      <!-- Step 1 -->
      <b-row class="justify-content-center">
        <b-col cols="12" md="10">
          <b-card
            header="Step 1: Download"
            header-bg-variant="primary"
            header-text-variant="light"
            header-tag="h3"
          >
            <b-card-body>
              <p>
                First of all download the ISO file from
                <router-link to="/download">here</router-link>.
              </p>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>

      <!-- Step 2 -->
      <b-row class="justify-content-center pt-3">
        <b-col cols="12" md="10">
          <b-card
            header="Step 2: Prepare installation media"
            header-bg-variant="primary"
            header-text-variant="light"
            header-tag="h3"
          >
            <b-card-body>
              <p>
                You can install it using a pendrive or a dvd. For Windows users,
                you can use applications like
                <a
                  href="https://www.pendrivelinux.com/yumi-multiboot-usb-creator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Yumi</a
                >,
                <a
                  href="https://www.balena.io/etcher/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >balenaEtcher</a
                >,
                <a
                  href="https://rufus.ie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Rufus</a
                >
                etc to make bootable pendrives. For Linux users, you can use dd,
                <a
                  href="https://www.balena.io/etcher/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >balenaEtcher</a
                >
                or any application you are comfortable to use. You can also burn
                the ISO to a dvd if you have any dvd writer.
              </p>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>

      <!-- Step 3 -->
      <b-row class="justify-content-center pt-3">
        <b-col cols="12" md="10">
          <b-card
            header="Step 3: Empty space and requirements"
            header-bg-variant="primary"
            header-text-variant="light"
            header-tag="h3"
          >
            <b-card-body>
              <p>
                Before you boot the live system and install, make sure you have
                an empty partition of at least 10 GB size and the system meats
                the minimum requirements for the ISO to run. To create empty
                partitions use any partitioning tool you are familiar with.
              </p>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>

      <!-- Step 4 -->
      <b-row class="justify-content-center pt-3">
        <b-col cols="12" md="10">
          <b-card
            header="Step 4: Boot and install"
            header-bg-variant="primary"
            header-text-variant="light"
            header-tag="h3"
          >
            <b-card-body>
              <p>
                Now you go ahead and boot from your installation media. You will
                end up with a graphical environment. You will find the installer
                application icon on your desktop or you can search the start
                menu for the term "installer".
              </p>
              <p>
                Start the application and follow the steps there to complete
                your installation.
              </p>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>

      <!-- Step 5 -->
      <b-row class="justify-content-center pt-3">
        <b-col cols="12" md="10">
          <b-card
            header="Step 5: Reboot"
            header-bg-variant="primary"
            header-text-variant="light"
            header-tag="h3"
          >
            <b-card-body>
              <p>
                When you are done installing Arch Linux, remove the installation
                media and reboot/restart the computer.
              </p>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>

      <!-- Step 6 -->
      <b-row class="justify-content-center pt-3">
        <b-col cols="12" md="10">
          <b-card
            header="Step 6: Things to do after install"
            header-bg-variant="primary"
            header-text-variant="light"
            header-tag="h3"
          >
            <b-card-body>
              <p>
                <b>NOTE :</b> This step is no longer needed from version
                2020.10. So skip it if you are using an ISO of version 2020.10
                or later. But if you are using older version then please perform
                this step.
              </p>
              <p>
                In you newly installed system you must run the following
                commands in the terminal. Remember you will need internet
                connection to successfully run all of them. These commands are
                needed to allow installing more software/applications. If you
                don't have internet connection right after installation don't
                worry, just keep using the system and when you can connect to
                the internet run these commands in the terminal.
              </p>
              <p>
                <code>sudo pacman-key --init</code>
              </p>
              <p>
                <code>sudo pacman-key --populate archlinux</code>
              </p>
              <p>
                <code>sudo pacman -Syy</code>
              </p>
              <p>
                <code>sudo pacman -S archlinux-keyring</code>
              </p>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>

      <!-- Step 7 -->
      <b-row class="justify-content-center pt-3 pb-5">
        <b-col cols="12" md="10">
          <b-card
            header="Step 7: Arch Linux Wiki"
            header-bg-variant="primary"
            header-text-variant="light"
            header-tag="h3"
          >
            <b-card-body>
              <p>
                Never forget to check out
                <a
                  href="http://wiki.archlinux.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Arch Linux Wiki</a
                >. For whatever package you want to install, run and customize
                always read the wiki for instructions and tips.
              </p>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
