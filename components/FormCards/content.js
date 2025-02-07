const forms = [
  {
    title: "New Passport  DS-11",
    image: "/assets/imgs/svg/icon-form-ds11.svg",
    ctaText: "Complete DS-11 Online",
    ctaHref: "https://app.mypassporthub.com/ds-11",
    requirementsTextHtml: <h3>Start a DS-11 now if following applies:</h3>,
    requirementsListHtml: (
      <ul class="e-list">
        <li>
          <p class="">
            You&apos;re applying on behalf of{" "}
            <b>someone under the age of 16.</b>
          </p>
        </li>
        <li>
          <p class="">It is your first U.S. passport.</p>
        </li>
        <li>
          <p class="">
            Your previous U.S. passport was issued over 15 years ago.
          </p>
        </li>
        <li>
          <p class="">
            If you are over 16 and were aged 15 or under when you were issued
            your last passport.
          </p>
        </li>
      </ul>
    ),
  },
  {
    title: "Passport Renewal DS-82",
    image: "/assets/imgs/svg/icon-form-ds82.svg",
    ctaText: "Complete DS-82 Online",
    ctaHref: "https://app.mypassporthub.com/ds-82",
    requirementsTextHtml: <h3>Start a DS-82 now if your previous passport:</h3>,
    requirementsListHtml: (
      <ul class="e-list">
        <li>
          <p class="">Is in your possession and is undamaged.</p>
        </li>
        <li>
          <p class="">Was issued when you were aged 16 or older.</p>
        </li>
        <li>
          <p class="">Has few blank passport pages remaining.</p>
        </li>
        <li>
          <p class="">Will expire soon or has expired in the last 5 years.</p>
        </li>
        <li>
          <p class="">
            Was issued 1+ years ago and you have since legally changed your
            name.
          </p>
        </li>
      </ul>
    ),
  },
  {
    title: "Lost or Stolen Passport DS-64",
    image: "/assets/imgs/svg/icon-form-ds64.svg",
    ctaText: "Complete DS-64 Online",
    ctaHref: "https://app.mypassporthub.com/ds-64",
    requirementsTextHtml: <h3>Start a DS-64 now if your passport:</h3>,
    requirementsListHtml: (
      <ul class="e-list">
        <li>
          <p class="">Was lost or stolen and you wish to report the loss.</p>
        </li>
        <li>
          <p class="">
            Was lost or stolen and you wish to report the loss AND apply for a
            new passport.
          </p>
        </li>
      </ul>
    ),
  },
];

export default forms;
