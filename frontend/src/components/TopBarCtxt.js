import React from "react";

export const Ctxt = React.createContext({
  topBarInfo: {
    title: "",
    linkedItems: [],
    showUserImage: false,
    showHomeLogo: false
  },
  setTopBarInfo: () => {},
});

export const setTopBarInfo = (NewInfo, OldInfo, setInfo) => {
  if (NewInfo != OldInfo) {
    setInfo(NewInfo);
  }
};

export let menuByScreen = {
  LoginScreen: {
    title: "Mis Competiciones",
    linkedItems: [
      { name: "Mis Partidos", link: "/me/matches" },
      { name: "Market", link: "/me/market" },
    ],
    showUserImage: true,
    showHomeLogo: true
  },

  CompetitionsScreen: {
    title: "Mis Competiciones",
    linkedItems: [
      { name: "Mis Partidos", link: "/me/matches" },
      { name: "Market", link: "/me/market" },
    ],
    showUserImage: true,
    showHomeLogo: true
  },

  MatchesScreen: {
    title: "Mis Partidos",
    linkedItems: [
      { name: "Mis Competiciones", link: "/" },
      { name: "Market", link: "/me/market" },
    ],
    showUserImage: true,
    showHomeLogo: true
  },

  MarketScreen: {
    title: "Market",
    linkedItems: [
      { name: "Mis competiciones", link: "/" },
      { name: "Mis Partidos", link: "/me/matches" },
    ],
    showUserImage: true,
    showHomeLogo: true
  },

  MarketInformationScreen: {
    title: "",
    linkedItems: [
      { name: "Mis competiciones", link: "/" },
      { name: "Mis Partidos", link: "/me/matches" },
    ],
    showUserImage: true,
  },
};
export const menuByCompetition = (competitionId) => {
  return {
    InscriptionScreen: {
      title: "Inscripción",
      linkedItems: [
        {
          name: "Partidos",
          link: `/me/competitions/${competitionId}/Matches`,
        },
        {
          name: "Ranking",
          link: `/me/competitions/${competitionId}/Ranking`,
        },
        {
          name: "Información",
          link: `/me/competitions/${competitionId}/Information`,
        },
      ],
      showUserImage: true,
      showHomeLogo: true
    },

    MatchesScreen: {
      title: "Partidos",
      linkedItems: [
        {
          name: "Incripción",
          link: `/me/competitions/${competitionId}/Inscription`,
        },
        {
          name: "Ranking",
          link: `/me/competitions/${competitionId}/Ranking`,
        },
        {
          name: "Información",
          link: `/me/competitions/${competitionId}/Information`,
        },
      ],
      showUserImage: true,
      showHomeLogo: true
    },

    RankingScreen: {
      title: "Ranking",
      linkedItems: [
        {
          name: "Incripción",
          link: `/me/competitions/${competitionId}/Inscription`,
        },
        {
          name: "Partidos",
          link: `/me/competitions/${competitionId}/Matches`,
        },
        {
          name: "Información",
          link: `/me/competitions/${competitionId}/Information`,
        },
      ],
      showUserImage: true,
      showHomeLogo: true
    },

    InformationScreen: {
      title: "Información",
      linkedItems: [
        {
          name: "Incripción",
          link: `/me/competitions/${competitionId}/Inscription`,
        },
        {
          name: "Partidos",
          link: `/me/competitions/${competitionId}/Matches`,
        },
        {
          name: "Ranking",
          link: `/me/competitions/${competitionId}/Ranking`,
        },
      ],
      showUserImage: true,
      showHomeLogo: true
    },
  };
};
