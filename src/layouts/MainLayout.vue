<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Common use Kanji　「常用漢字」
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Menu
        </q-item-label>

        <q-list bordered class="rounded-borders">
          <q-expansion-item
            expand-separator
            icon="school"
            label="Kanji list"
            caption="Common kanji"
            default-opened
          >
            <q-card>
              <q-card-section>
                <!-- <q-list bordered class="rounded-borders">
                  <q-expansion-item expand-separator label="あ、い、う、え、お">
                    <q-card>
                      <q-card-section>
                        <EssentialLink
                          v-for="kanjiLink in aiueoLinks"
                          :key="kanjiLink.title"
                          v-bind="kanjiLink"
                        />
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </q-list> -->
                <router-link to="/kanji-list/あ" >
                  <template v-slot="props">
                    <q-btn v-bind="buttonProps(props, 'あ')" />
                  </template>
                </router-link>

                <router-link to="/kanji-list/い">
                  <template v-slot="props">
                    <q-btn v-bind="buttonProps(props, 'い')" />
                  </template>
                </router-link>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
   
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "About",
    caption: "About common use kanji list",
    icon: "info",
    link: "/about"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      aiueoLinks: [
        {
          title: "あ",
          link: "/kanji-list/あ"
        },
        {
          title: "い",
          link: "/kanji-list/い"
        }
      ],
      selectedSection: "あ",
      props: [
        {
          label: "あ、い、う、え、お",
          children: [
            { label: "あ", handler: this.nodeHandler, meta: "あ" },
            { label: "い", handler: this.nodeHandler, meta: "い" }
          ]
        }
      ]
    };
  },
  methods: {
    buttonProps({ href, route, isActive, isExactActive }, label) {
      // const props = {
      //   color: "black",
      //   noCaps: true,
      //   label: `To "${route.fullPath}"`,
      //   outline: true,
      //   to: href
      // };
        console.log(href);
       const props = {
        color: "black",
        noCaps: true,
        label: label,
        outline: true,
        to: route.fullPath
      };


      if (isActive === true) {
        props.color = isExactActive === true ? "primary" : "black";
      } else {
        props.color = "black";
      }

      return props;
    }
  }
};
</script>
