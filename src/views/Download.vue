<template>
  <div>
    <b-container fluid class="pl-0 ml-0 pr-0 mr-0">
      <b-row
        class="justify-content-center"
        v-for="(release, index) in releases"
        :key="index"
      >
        <b-col cols="12" md="10" lg="8" class="pb-3">
          <b-card
            :header="release['title']"
            header-bg-variant="primary"
            header-text-variant="light"
            header-tag="h3"
          >
            <b-card-body>
              <b-container fluid>
                <h5>Architecture: {{ release["arch"] }}</h5>
                <h5>Download live ISO from sourceforge</h5>
                <b-row class="justify-content-center">
                  <a
                    :href="buildDownloadUrl(release['isoName'])"
                    target="blank"
                  >
                    <img
                      alt="Download EasyArch"
                      src="https://a.fsdn.com/con/app/sf-download-button"
                      width="276"
                      height="48"
                      srcset="
                        https://a.fsdn.com/con/app/sf-download-button?button_size=2x 2x
                      "
                    />
                  </a>
                </b-row>
                <b-row class="justify-content-center pt-3">
                  <a
                    :href="buildDownloadUrl(release['isoName'])"
                    target="blank"
                  >
                    <img
                      alt="SourceForge"
                      :src="buildDownloadCounterBadgeUrl(release['isoName'])"
                    />
                  </a>
                </b-row>
                <h5>MD5 Sum:</h5>
                <code>{{ release["md5Sum"] }}</code>
                <h5>SHA1 Sum:</h5>
                <code>{{ release["sha1Sum"] }}</code>
                <b-container fluid class="pt-4 pl-0 ml-0 pr-0 mr-0">
                  <h5>Minimum system requirements:</h5>
                  <p>
                    <b-table-simple responsive bordered>
                      <b-tbody>
                        <b-tr>
                          <b-td class="bg-dark text-light">Processor</b-td>
                          <b-td>{{ release["procReq"] }}</b-td>
                        </b-tr>
                        <b-tr>
                          <b-td class="bg-dark text-light">RAM</b-td>
                          <b-td>{{ release["ramReq"] }}</b-td>
                        </b-tr>
                        <b-tr>
                          <b-td class="bg-dark text-light">HDD Space</b-td>
                          <b-td>{{ release["hddReq"] }}</b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                  </p>
                </b-container>
              </b-container>
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
    const logoImageBase64 =
      "data:image/png;base64,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" +
      "jH1gklGx7AAAAABJRU5ErkJggg==";
    return {
      logoBase64: logoImageBase64,
      releases: [
        {
          title: "EasyArch 2020.10",
          arch: "64 bit",
          isoName: "EasyArch-2020.10-x86_64.iso",
          md5Sum: "1b2618c8c1915bc7cf049cd63ad0d132",
          sha1Sum: "30e23b30183c0598ce56774f5f939cb854382937",
          procReq: "2 core 64 bit",
          ramReq: "1 GB",
          hddReq: "10 GB"
        },
        {
          title: "EasyArch 2020.8",
          arch: "64 bit",
          isoName: "EasyArch-2020.08-x86_64.iso",
          md5Sum: "839e928aedb1c0f9676a48780bec19cd",
          sha1Sum: "7a082aaf445927960649bd6cb3ed38488b8f8aae",
          procReq: "2 core 64 bit",
          ramReq: "1 GB",
          hddReq: "10 GB"
        }
      ]
    };
  },
  methods: {
    buildDownloadCounterBadgeUrl(isoName) {
      var url =
        "https://img.shields.io/sourceforge/dt/easyarch/iso/" +
        isoName +
        "?label=TOTAL%20DOWNLOADS&logo=" +
        this.logoBase64 +
        "&style=for-the-badge";
      return url;
    },
    buildDownloadUrl(isoName) {
      var url =
        "https://sourceforge.net/projects/easyarch/files/iso/" +
        isoName +
        "/download";
      return url;
    }
  }
};
</script>
