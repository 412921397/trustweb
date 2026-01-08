<template>
  <div>
    <div class="default-transition bg-trustBlue text-trustWhite px-6 py-6 desktop:px-10 desktop:py-12 rounded-[20px]">
      <div class="text-[50px] leading-[1.1]">Trust Wallet Privacy Notice</div>
      <div class="text-[16px] mt-6">Last Updated: Oct 22, 2025</div>
    </div>
    <div class="default-transition mt-8 break-all">
      This Privacy Notice (“Notice”) describes how Dapps Platform Bahrain W.L.L doing business as Trust Wallet ((“Trust Wallet”, “we”, “us”, “our”,
      “ourselves”)) collects and processes your Personal Data (“you”, “your”) through our websites (https://trustwallet.com/) and applications or
      other services (collectively, together with our websites and apps, our “Services”). In addition, we may also process your Personal Data for
      specific purposes, where applicable, such as processing your job applications or administering your employment with us. By using our Services or
      engaging with us, you consent to the collection, storage, processing, and transfer of your Personal Data as described in this Privacy Notice.
      <div class="mt-8 break-all">
        This Privacy Notice applies together with our Terms of Use, any terms of business or other contractual documents, including but not limited to
        any agreements we may have with you.
      </div>
    </div>
    <div class="default-transition mt-8 break-all">
      <div class="cursor-pointer font-bold" @click="handleScroll(ourRef)">1. Our Relationship with You</div>
      <div class="mt-3">
        <div class="cursor-pointer font-bold" @click="handleScroll(collectionRef)">2. Collection and Use of Your Personal Data</div>
        <div class="mt-2 flex flex-col ml-[18px] gap-2">
          <span class="cursor-pointer" @click="handleScroll(walletRef)">When you Use Our Self-Custody Wallet</span>
          <span class="cursor-pointer" @click="handleScroll(websiteRef)">When You Visit Our Website</span>
          <span class="cursor-pointer" @click="handleScroll(recruitmentRef)">Recruitment and Employment</span>
          <span class="cursor-pointer" @click="handleScroll(eventsRef)">Participation in Our Events</span>
          <span class="cursor-pointer" @click="handleScroll(pushRef)">Push Notification</span>
          <span class="cursor-pointer" @click="handleScroll(scanRef)">Biometric Authentication (Face ID & Fingerprint Scan)</span>
          <span class="cursor-pointer" @click="handleScroll(servicesRef)">Interaction with Our AI Services</span>
          <span class="cursor-pointer" @click="handleScroll(personalRef)">Personal Data collected automatically from you:</span>
          <span class="cursor-pointer" @click="handleScroll(dataRef)">Aggregated and Anonymized Data</span>
        </div>
      </div>
      <div class="mt-3 cursor-pointer font-bold" @click="handleScroll(cookieRef)">3. Use of Cookies</div>
      <div class="mt-3 cursor-pointer font-bold" @click="handleScroll(shareRef)">4. How and Why We Share Your Data</div>
      <div class="mt-3 cursor-pointer font-bold" @click="handleScroll(transferRef)">5. International Transfer of Personal Data</div>
      <div class="mt-3 cursor-pointer font-bold" @click="handleScroll(securityRef)">6. Data Security</div>
      <div class="mt-3 cursor-pointer font-bold" @click="handleScroll(retentionRef)">7. Data Retention</div>
      <div class="mt-3">
        <div class="cursor-pointer font-bold" @click="handleScroll(privacyRef)">8. What Privacy Rights Do You Have?</div>
        <div class="flex flex-col ml-[18px]">
          <span class="cursor-pointer" @click="handleScroll(requestRef)">Submit Privacy Request</span>
        </div>
      </div>
      <div class="mt-3 cursor-pointer font-bold" @click="handleScroll(childrenRef)">9. Children</div>
      <div class="mt-3 cursor-pointer font-bold" @click="handleScroll(noticesRef)">10. Conditions of Use, Notices and Revisions</div>
      <div class="mt-3 cursor-pointer font-bold" @click="handleScroll(teamRef)">11. Privacy Team Contact Information</div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="ourRef" class="font-bold text-trustBlue dark:text-trustGreen mb-2.5 scroll-mt-[100px]">1. Our Relationship with You</div>
      Your right to privacy and the protection of your Personal Data is important to us. Trust Wallet is committed to the best practices in privacy,
      and we will only collect data when it’s strictly necessary to provide our Services.
      <div class="py-5">
        By using Trust Wallet’s Services, including, for example, visiting our website, using our application, interacting on social media or
        community forum, participating in our offline events (and this list is not exhaustive), you acknowledge and accept the use, disclosure, and
        procedures outlined in this Privacy Notice.
      </div>
      The following sections provide further details as to how we process your Personal Data through Trust Wallet as the Data Controller.
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="collectionRef" class="font-bold text-trustBlue dark:text-trustGreen mb-2.5 scroll-mt-[100px]">
        2. Collection and Use of Your Personal Data
      </div>
      “Personal Data” is information that may identify an individual or relates to an identifiable individual. This includes information you provide
      voluntarily to us, information which is collected or created automatically in the natural course of provision of our Services, or otherwise when
      you contact us. Following best practices in privacy such as data minimisation, we endeavour to collect only the amount of Personal Data that is
      necessary to provide our Services to our users.
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="walletRef" class="font-bold mb-2.5 underline scroll-mt-[100px]">
        <span class="cursor-pointer">When you Use Our Self-Custody Wallet</span>
      </div>
      As a user of our wallet application, whether through the app or browser extension, you have the option to create or import wallet information,
      which is stored locally on your device. We do not collect email addresses or any other categories of personal data for this purpose.
      <div class="py-5">
        Below, we present a table that outlines the personal data the application uses and the purposes for processing that information.
      </div>
    </div>
    <div class="mt-8 break-all default-transition bg-[#f4f4f7]! dark:bg-trustBlack! rounded-[20px] px-1 py-1 border border-[#e0e0e0]">
      <div class="flex flex-row justify-between items-center font-bold h-20">
        <div class="w-[33%]">Category of personal Data</div>
        <div class="w-[33%] px-2">Types of personal Data</div>
        <div class="w-[33%]">Purpose of processing & Legal Basis</div>
      </div>
      <div class="flex flex-row justify-between mt-8">
        <div class="w-[33%]">Wallet Information</div>
        <div class="w-[33%] px-2">
          <div class="mb-1">Wallet private key and public wallet address.</div>
          * Please note that wallet information is stored locally on your device under your custody.
        </div>
        <div class="w-[33%]">
          <div>
            We process your Wallet Information and Transaction Information to deliver self-custody crypto wallet services and to facilitate, execute,
            and manage the transactions you request.
          </div>
          <br />
          Our legal basis for this processing is that it is essential for the performance of a contract of which you are a party.
        </div>
      </div>
      <div class="flex flex-row justify-between mt-8">
        <div class="w-[33%]">Transaction Information</div>
        <div class="w-[33%] px-2">
          Information about the historical transaction you made on the public blockchain such as timestamps, public wallet address and transaction
          amounts.
        </div>
        <div class="w-[33%]">
          <div>
            We process your Transaction Information to deliver self-custody crypto wallet services and to facilitate, execute, and manage the
            transactions you request.
          </div>
          <br />
          Our legal basis for this processing is that it is essential for the performance of a contract of which you are a party.
        </div>
      </div>
      <div class="flex flex-row justify-between mt-8">
        <div class="w-[33%]">Device & Usage Information</div>
        <div class="w-[33%] px-6">
          <div>Device model, operating system, app installation information, browser type and language setting.</div>
          <br />
          * Please note that the IP address is used only on a transient basis, cannot be linked to any user’s personal data, and is not retained. The
          IP address’s sole purpose is to facilitate traffic and service redirection in compliance with regulatory requirements based on the user’s
          country. We neither store nor access the IP address.
        </div>
        <div class="w-[33%]">
          <div>We use your Device and Usage Information to deliver and enhance our services, ensuring you have a better user experience.</div>
          <br />
          Our legal basis for this processing is that it is necessary to fulfill our legitimate interests in improving our services and enhancing user
          experience.
        </div>
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="websiteRef" class="font-bold mb-2.5 underline scroll-mt-[100px]"><span class="cursor-pointer">When You Visit Our Website</span></div>
      When you use our website, read our blog, request customer support, participate in our community forum or campaigns, you may provide personal
      data. Please note that we do not ask for your wallet information for this purpose. You can access our forum without creating an account, though
      you have the option to create a profile if you wish to interact with other members.
      <div class="py-5">
        Below, we present a table that outlines the personal data the application uses and the purposes for processing that information.
      </div>
    </div>
    <div class="mt-8 break-all default-transition bg-[#f4f4f7]! dark:bg-trustBlack! rounded-[20px] px-3 py-6 border border-[#e0e0e0]">
      <div class="flex flex-row justify-between items-center font-bold">
        <div class="w-[33%]">Category of personal Data</div>
        <div class="w-[33%] px-2">Types of personal Data</div>
        <div class="w-[33%]">Purpose of processing & Legal Basis</div>
      </div>
      <div class="flex flex-row justify-between mt-8">
        <div class="w-[33%]">Contact Information</div>
        <div class="w-[33%] px-2">Information you choose to provide during your interaction with us on our website such as email address.</div>
        <div class="w-[33%]">
          <div>We process your contact information to communicate with you on customer support and assistance purposes.</div>
          <br />
          Our legal basis for this processing is that it is essential for the performance of a contract of which you are a party.
        </div>
      </div>
      <div class="flex flex-row justify-between mt-8">
        <div class="w-[33%]">Social Media Information</div>
        <div class="w-[33%] px-2">
          Information you choose to provide during your interaction with us via social media channels such as X, Telegram, etc.
        </div>
        <div class="w-[33%]">
          <div>We use your social media information to keep you updated on the latest announcement on social media channels.</div>
          <br />
          We rely on your consent to process your personal data for interacting with us. You may withdraw your consent at any time. The withdrawal of
          consent does not affect the lawfulness of processing based on consent before its withdrawal.
        </div>
      </div>
      <div class="flex flex-row justify-between mt-8">
        <div class="w-[33%]">Profile Information</div>
        <div class="w-[33%] px-2">
          Information you choose to provide when creating a profile on our online community forum such as email, username, profile picture.
        </div>
        <div class="w-[33%]">
          <div>We process your profile information to enable login and facilitate member interactions on the community forum platform.</div>
          <br />
          Our legal basis for this processing is that it is essential for the performance of a contract of which you are a party.
        </div>
      </div>
      <div class="flex flex-row justify-between mt-8">
        <div class="w-[33%]">Device & Usage Information</div>
        <div class="w-[33%] px-2">
          <div>
            Device model, operating system, internet connectivity data such as browser type, application version, time zone and language setting.
          </div>
          <br />
          * Please note that the IP address is used only on a transient basis, cannot be linked to any user’s personal data, and is not retained. The
          IP address’s sole purpose is to facilitate traffic and service redirection in compliance with regulatory requirements based on the user’s
          country. We neither store nor access the IP address.
        </div>
        <div class="w-[33%]">
          <div>We use your Device and Usage Information to deliver and enhance our services, ensuring you have a better user experience.</div>
          <br />
          Our legal basis for this processing is that it is necessary to fulfill our legitimate interests in improving our services and enhancing user
          experience.
        </div>
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="recruitmentRef" class="font-bold mb-2.5 underline scroll-mt-[100px]">
        <span class="cursor-pointer">Recruitment and Employment</span>
      </div>
      If you apply for a position with us or become employed by us, we collect and process your Personal Data for purposes including recruitment,
      onboarding, employment administration, compliance with legal obligations, and other employment-related activities. Personal Data may be
      collected directly from you, from third-party recruitment agencies, or from publicly available sources such as LinkedIn.
      <div class="py-5">
        We process the following categories of Personal Data for recruitment and employment purposes:

        <ul class="mt-3! list-disc ml-4!">
          <li>
            Contact Information: We will collect your name, email address, and other relevant contact details to communicate with you about your job
            application and, where applicable, your employment.
          </li>
          <li>
            Education and Employment Information: We collect your Curriculum Vitae (CV), resume, LinkedIn profile, academic certificates and
            transcripts, employment history, and (where relevant) salary and bonus details. We use this information to assess your suitability,
            process your application, conduct background checks, and manage your employment relationship.
          </li>
        </ul>
        <div class="mt-[18px]">
          During recruitment, we rely on your consent to process your Personal Data. Once employed, we rely on the necessity to perform your contract,
          comply with legal obligations, and our legitimate interests in managing the employment relationship. If we are unable to offer you a
          position, we may retain your personal data for up to two years based on our legitimate interest in considering you for future roles, unless
          you object. We will delete your data sooner if it becomes clear that no offer will be made or accepted, unless needed to establish,
          exercise, or defend legal claims.
        </div>
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="eventsRef" class="font-bold mb-2.5 underline scroll-mt-[100px]"><span class="cursor-pointer">Participation in Our Events</span></div>
      When you register or attend our event, we collect some Personal Data to help manage your participation. This may include your name, contact
      details, company information, job title, industry, location, LinkedIn profile, payment details, and billing address.
      <div class="py-5">
        We process the following categories of Personal Data for recruitment and employment purposes:
        <br />
        We use this information to:
        <br />
        <ul class="mt-3! list-disc ml-4!">
          <li>Process your event registration and ticketing</li>
          <li>Communicate important updates about the event</li>
          <li>Analyze participation to improve future events</li>
        </ul>
        <div class="mt-[18px]">
          We process your Personal Data based on the agreement you enter when registering, and on our legitimate interest in delivering and improving
          our events. Where required, we will seek your consent for marketing purposes or when sharing your details with sponsors.
        </div>
        <div class="mt-[18px]">
          We rely on the legal basis of contract performance to process your Personal Data for event registration and participation. In addition, we
          process certain data based on our legitimate interest in enhancing our services. Where required, we will obtain your consent for marketing
          activities and for sharing your information with event sponsors.
        </div>
        <div class="mt-[18px]">
          Please note that photography and videography may take place during the event for promotional and archival purposes. By attending our event,
          you agree that Trust Wallet and our partners may use your image in marketing materials, social media posts, or future event promotions as
          part of our efforts to share and celebrate the event.
        </div>
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="pushRef" class="font-bold mb-2.5 underline scroll-mt-[100px]"><span class="cursor-pointer">Push Notification</span></div>
      <div class="mt-[18px]">
        We may send you optional push notifications through our app to provide alerts, updates, or news relevant to your interests. These
        notifications are sent based on your choices, which you can manage or withdraw at any time through the notification settings within the app.
        You can choose the categories of notifications you wish to receive or opt out entirely.
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="scanRef" class="font-bold mb-2.5 underline scroll-mt-[100px]">
        <span class="cursor-pointer">Biometric Authentication (Face ID & Fingerprint Scan)</span>
      </div>
      <div class="mt-[18px]">
        We offer optional biometric authentication (such as Face ID or fingerprint recognition) as a secure and convenient method for logging into
        your wallet. If you choose to enable biometric authentication, your biometric data is processed directly on your device using its built-in
        security features on the mobile operating system. You can choose to enable or disable biometric authentication at any time through your device
        settings or within our app’s security settings. Your biometric authentication information is never transmitted to our servers or any third
        party.
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="servicesRef" class="font-bold mb-2.5 underline scroll-mt-[100px]">
        <span class="cursor-pointer">Interaction with Our AI Services</span>
      </div>
      <div class="mt-[18px]">
        When you use our Services that involve artificial intelligence (“AI Services”), such as our AI Chatbot, we process the content you provide in
        your inputs or feedback so that we can respond and deliver the AI functionality you have chosen to use
      </div>
      <div class="mt-[18px]">
        Voice Input (Optional): Where available, you may choose to interact with the AI Services using voice input. Your voice is processed in real
        time to create a text transcription, which is then handled in the same way as any other text-based input.
      </div>
      <div class="mt-[18px]">
        We process this content (which may include text, feedback, or voice input transcriptions) on the basis of contract performance, as it is
        necessary to provide the AI Services you request.
      </div>
      <div class="mt-[18px]">
        To deliver these features, we may use trusted third-party AI service providers acting on our instructions. They are bound by contractual and
        confidentiality obligations and are not permitted to use your data for their own purposes.
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="personalRef" class="font-bold mb-2.5 underline scroll-mt-[100px]">
        <span class="cursor-pointer">Personal Data collected automatically from you:</span>
      </div>
      <div class="mt-[18px]">
        In certain circumstances, we may collect Personal Data automatically from you when you use our Services, in accordance with applicable laws.
        This may include device, log, and usage data, which helps us enhance your experience, provide customer support, improve the performance of our
        sites and Services, and safeguard your account by detecting unauthorized access and preventing fraud.
      </div>
      <div class="mt-[18px]">
        When you use our self-custody wallet or visit our website, your IP address may be processed on a transient basis. This limited processing is
        used solely (a) to route traffic and facilitate service localization in accordance with regulatory requirements, and (b) to establish secure
        connections with third-party platforms (e.g., Coinbase) when you choose to connect with them. In such cases, your IP address may be briefly
        shared with the relevant platform only for generating security and authentication tokens to safeguard your account and transactions. Your
        privacy remains protected at all times, and we do not log, retain or otherwise access your IP address beyond these temporary uses.
      </div>
      <div class="mt-[18px]">
        Our legal basis for processing this data is our legitimate interest in improving our Services, ensuring the security of our Services, and
        maintaining a safe environment for our users, including fraud monitoring and prevention.
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="dataRef" class="font-bold mb-2.5 underline scroll-mt-[100px]"><span class="cursor-pointer">Aggregated and Anonymized Data</span></div>
      <div class="mt-[18px]">
        We also use aggregated or anonymized data to improve our Services. This involves analyzing general usage trends, gathering feedback, and
        conducting research without identifying individual users. For example, we may create overall usage reports for specific regions without
        containing Personal Data. We may also share or disclose such aggregated or anonymized data with trusted service providers, business partners,
        or other third parties—such as prospective investors or partners—for purposes including, but not limited to, demonstrating the performance of
        our Services, supporting business development, or informing strategic decisions.
      </div>
      <div class="mt-[18px]">
        We will not use your Personal Data for purposes that are incompatible with the purposes of which you have been informed, unless it is required
        or authorized by law, or it is in your own vital interest to do so.
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="cookieRef" class="font-bold mb-2.5 text-trustBlue dark:text-trustWhite scroll-mt-[100px]">
        <span class="cursor-pointer">3. Use of Cookies</span>
      </div>
      <div class="mt-[18px]">
        We use cookies and similar tools to enhance your user experience, provide our services, enhance our marketing efforts and understand how
        customers use our services so we can make improvements. Depending on applicable laws in the region you are located in, the cookie banner on
        your browser will tell you how to accept or refuse cookies. Please read our cookie notice here.
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div class="font-bold mb-2.5 text-trustBlue dark:text-trustWhite">
        <span ref="shareRef" class="cursor-pointer scroll-mt-[100px]">4. How and Why We Share Your Data</span>
      </div>
      <div class="mt-[18px]">
        Information about our users is an important part of our business and we are not in the business of selling our user’s Personal Data to others.
        We may transfer Personal Data to our service providers or third parties in connection with Trust Wallet’s operation of its business, as
        certain features on Trust Wallet rely on various third-party products and services (collectively “Third Party Services”), such as processing
        of web hosting, cloud storage, analytics, and improvement of website-related services and features, and performance of maintenance services.
      </div>
      <div class="mt-[18px]">
        Third party services providers only have access to Personal data, such as your public Wallet addresses, to perform their functions, provide
        services and may not use it for other purposes. Furthermore, they must process the personal data in accordance with our contractual agreements
        and only as permitted by applicable data protections laws.
      </div>
      <div class="mt-[18px]">
        We may also share personal data with the following persons or in the following circumstances:
        <ul class="mt-3! list-disc ml-4!">
          <li>
            Business transfers: As we continue to develop our business, we might sell or buy other businesses or services. In such transactions, user
            information generally is one of the transferred business assets but remains subject to the promises made in any pre-existing Privacy
            notice (unless, of course, the user consents otherwise). Also, in the unlikely event that Trust Wallet or substantially all of its assets
            are acquired, users’ information will be one of the transferred assets. We may share non-personally identifiable information publicly and
            with our partners- like publishers, advertisers, developers, or right holders.
          </li>
          <li>
            Legal Authorities: We may be required by law or by Court to disclose certain information which might cover Personal Data or any engagement
            we may have to relevant regulatory, law enforcement and/or other competent authorities. We will disclose Personal Data to legal
            authorities to the extent we are obliged to do so according to the law. We may also need to disclose Personal Data in order to enforce or
            apply our legal rights or to prevent fraud.
          </li>
          <li>
            Protection of Us and Others: We will share Personal Data outside of Trust Wallet if we have a reasonable belief that access, use,
            preservation, or disclosure of the information is reasonably necessary to comply with any applicable law, regulation, legal process, or
            enforceable governmental request; to cooperate with law enforcement; to enforce or apply our Terms of Use and other agreements; or to
            protect the rights, property, or safety of Trust Wallet, our employees, our users, or others. This includes exchanging information with
            other companies and organizations for fraud protection and credit risk reduction, and with regulatory agencies and law enforcement to
            comply with lawful requests.
          </li>
        </ul>
      </div>
      <div class="mt-[18px]">
        Our Services and websites may contain links that enable you to connect with various third-party websites, applications, and other external
        platforms (referred to as "Third Party Platforms"). These Third Party Platforms act as independent data controllers and their processing of
        your Personal Data will be subject to their privacy notices and policies. This Privacy Notice does not cover the privacy practices of these
        Third Party Platforms. A link to a third-party site does not imply endorsement by us or our Affiliates. Your use of these Third Party
        Platforms and their handling of your Personal Data will be governed by their respective terms and privacy policies, and not by this Privacy
        Notice.
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div class="font-bold mb-2.5 text-trustBlue dark:text-trustWhite">
        <span ref="transferRef" class="cursor-pointer scroll-mt-[100px]">5. International Transfers of Personal Data</span>
      </div>
      <div class="mt-[18px]">
        We maintain servers hosted by our trusted service providers, and your information may be processed on servers located outside of your country
        of residence. Additionally, we may transfer your Personal Data to our Affiliates, third-party partners, and service providers located in
        various countries around the world.
      </div>
      <div class="mt-[18px]">
        In instances where we process your Personal Data on servers outside your country or transfer it to third countries or international
        organizations beyond your country of residence, we implement appropriate technical, organizational, and contractual safeguards to ensure that
        your Personal Data remains protected. This includes, but is not limited to, the use of Standard Contractual Clauses. These measures ensure
        that any such transfers comply with applicable data protection laws and maintain an adequate level of protection for your Personal Data as
        outlined in this Notice.
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div class="font-bold mb-2.5 text-trustBlue dark:text-trustWhite">
        <span ref="securityRef" class="cursor-pointer scroll-mt-[100px]">6. Data Security</span>
      </div>
      <div class="mt-[18px]">
        We recognize that information security is a crucial component of data privacy. We are committed to making sure your information is protected
        in accordance with applicable laws and our data privacy policies. Although no data transmission, including over the Internet or through any
        website, can be guaranteed to be entirely secure, we employ a range of commercially reasonable physical, technical, and procedural measures to
        protect personal data from unauthorized access, use, disclosure, alteration, or destruction.
      </div>
      <div class="mt-[18px]">
        The information you provide to us is stored on secure servers managed by us or our trusted service providers. Access to and use of this
        information are governed by our internal security policies and standards, or those agreed upon with our service providers. We hold ISO 27001
        and ISO 27701 certifications, which demonstrate our commitment to managing information security in accordance with best practices.
      </div>
      <div class="mt-[18px]">
        If you are our self-custody wallet user, please be aware that your wallet information and private key are stored locally on your device and
        remains under your personal control. To protect your wallet information, ensure that access controls and a passcode are enabled on both your
        device and the wallet application. It is important to keep your passcode confidential and not share it with anyone.
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div class="font-bold mb-2.5 text-trustBlue dark:text-trustWhite">
        <span ref="retentionRef" class="cursor-pointer scroll-mt-[100px]">7. Data Retention</span>
      </div>
      <div class="mt-[18px]">
        We keep your Personal Data to enable your continued use of our Services, for as long as it is required in order to fulfill the relevant
        purposes described in this Privacy Notice as may be required by law such as for tax and accounting purposes, or to resolve disputes and/or
        legal claims or as otherwise communicated to you. We may also keep your data for an extended period if required by applicable laws or if it is
        needed for legal disputes or regulatory matters.
      </div>
      <div class="mt-[18px]">
        When we have no ongoing legitimate business or legal requirement to retain your Personal Data, we will either delete or anonymise such
        information, or, if this is not possible (for example, because your Personal Data has been stored in backup archives), then we will securely
        store your Personal Data and isolate it from any further processing until deletion is possible.
      </div>
      <div class="mt-[18px]">
        Please note that even If you delete your wallet addresses from the Trust Wallet mobile application, uninstall Trust Wallet mobile applications
        from your device, or request that your information be deleted, the right to deletion/erasure of your personal data is not absolute in some
        circumstances. This is because blockchains are public decentralised networks and blockchain technology does not generally allow for data to be
        deleted and your right to erasure may not be able to be fully enforced.
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div class="font-bold mb-2.5 text-trustBlue dark:text-trustWhite">
        <span ref="privacyRef" class="cursor-pointer scroll-mt-[100px]">8. What Privacy Rights Do You Have?</span>
      </div>
      <div class="mt-[18px]">
        Subject to applicable law, as outlined below, you have a number of rights in relation to your privacy and the protection of your personal
        data. You have the right to request access to, correct, and delete your personal data, and to ask for data portability. In addition, when you
        consent to our processing of your personal data for a specified purpose, you may withdraw your consent at any time. If you want to exercise
        any of your rights please contact us through our online form. These rights may be limited and subject to exceptions in some situations - for
        example, where we can demonstrate we have a legal requirement to process your personal data.
      </div>
      <div class="mt-[18px]">
        <ul class="mt-3! list-disc ml-4!">
          <li>
            <span class="font-bold">Right to access:</span>
            You have the right to obtain a copy of the Personal Data that we hold about you as well as certain information related to its processing.
          </li>
          <li>
            <span class="font-bold">Right to correct:</span>
            You can request the rectification of inaccurate Personal Data and and you may also provide additional information to complete your
            records. You can also change your Personal Data in your account at any time.
          </li>
          <li>
            <span class="font-bold">Request to erase your Personal Data:</span>
            You may request the erasure of your Personal Data, including where such Personal Data would no longer be necessary to achieve the purposes
            for which it was collected.
            <div>* Please note that Personal Data may still need to be retained for compliance with applicable legal obligations.</div>
          </li>
          <li>
            <span class="font-bold">Right to object:</span>
            You can object, for reasons relating to your situation, to the processing of your Personal Data. For instance, you have the right to
            object where we rely on legitimate interest or where we process your data for direct marketing purposes.
          </li>
          <li>
            <span class="font-bold">Right to restrict processing:</span>
            You have the right, in certain cases, to temporarily restrict the processing of your Personal Data by us, provided there are valid grounds
            for doing so. We may continue to process your Personal Data if it is necessary for the defense of legal claims, or for any other
            exceptions permitted by applicable laws.
          </li>
          <li>
            <span class="font-bold">Right to withdraw or opt out your consent:</span>
            You have the right to withdraw your consent and request us to stop collecting, using and/or disclosing your Personal Data for any or all
            of the purposes listed above at any time. Exercising this right does not affect the lawfulness of the processing based on the consent
            given before the withdrawal of the latter.
          </li>
          <li>
            <span class="font-bold">Right to portability:</span>
            You can also request us to provide your information in a structured way so you can send it to another service provider.
          </li>
        </ul>
      </div>
      <div class="mt-12">
        <span ref="requestRef" class="cursor-pointer font-bold underline scroll-mt-[100px]">Submit Privacy Request</span>
        <div class="mt-2.5">Alternatively, to exercise your rights, you can submit a request using our online form.</div>
      </div>
      <div class="mt-[18px]">
        We will respond as quickly as possible. If we are unable to respond within 10 working days, we will inform you in writing of the timeline for
        our response. If we cannot fulfill your request, we will explain the reasons (unless prohibited by applicable laws). If you have any questions
        or concerns about how we collect and process your Personal Data, or if you wish to withdraw your consent for any processing, please contact
        us.
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div class="font-bold mb-2.5 text-trustBlue dark:text-trustWhite">
        <span ref="childrenRef" class="cursor-pointer scroll-mt-[100px]">9. Children</span>
      </div>
      <div class="mt-[18px]">
        We are especially sensitive about children’s information. Our Services are not targeted towards children, and our users must be at least
        eighteen (18) years old to use our services. We do not knowingly solicit data from or market to any persons under 18 years of age. By using
        the Services, you represent that you are at least 18 years old. If we become aware that we have collected Personal Data from someone under 18,
        we will deactivate the account in question and take reasonable measures to promptly delete all such data from our records unless we are
        legally required to keep it. If you become aware that any Personal Data we may have collected is from a user under the age of 18, please
        contact us using the contact information.
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div class="font-bold mb-2.5 text-trustBlue dark:text-trustWhite">
        <span ref="noticesRef" class="cursor-pointer scroll-mt-[100px]">10. Conditions of Use, Notices and Revisions</span>
      </div>
      <div class="mt-[18px]">
        If you choose to use our Services, your use and any dispute over privacy is subject to this Privacy Notice and our Terms of Use. If you have
        any concerns about privacy at Trust Wallet, please contact us and we will try our best to resolve it. You also have the right to contact your
        local Data Protection Authority.
      </div>
      <div class="mt-[18px]">
        We reserve the right to update and revise this Notice at any time. We will review this Privacy Notice from time to time to make sure it
        complies with applicable laws and conforms to changes in our business. If we do revise this Privacy Notice, we will update the “Last Updated”
        date at the beginning of this Notice so that you can tell if it has changed since your last visit and will do our best to notify you.
      </div>
      <div class="mt-[18px]">
        Please review this Privacy Notice regularly to ensure that you are aware of its terms. Your continued use of our Services after an amendment
        to our Privacy Notice constitutes your acceptance to the amended terms.
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div class="font-bold mb-2.5 text-trustBlue dark:text-trustWhite">
        <span ref="teamRef" class="cursor-pointer scroll-mt-[100px]">11. Privacy Team Contact Information</span>
      </div>
      <div class="mt-[18px]">
        If you have any privacy related questions, please contact us through our online form. Kindly note that we may not be able to respond to
        non-data privacy requests submitted via online form. Thank you for your understanding.
      </div>
      <div class="mt-[18px]">
        For any other Wallet App-related inquiries and customer support, please click here to contact our support for assistance.
      </div>
      <div class="mt-[18px]">Thanks for reading our Privacy Notice!</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const ourRef = ref(null);
const collectionRef = ref(null);
const walletRef = ref(null);
const websiteRef = ref(null);
const recruitmentRef = ref(null);
const eventsRef = ref(null);
const pushRef = ref(null);
const scanRef = ref(null);
const servicesRef = ref(null);
const personalRef = ref(null);
const dataRef = ref(null);
const cookieRef = ref(null);
const shareRef = ref(null);
const transferRef = ref(null);
const securityRef = ref(null);
const retentionRef = ref(null);
const privacyRef = ref(null);
const requestRef = ref(null);
const childrenRef = ref(null);
const noticesRef = ref(null);
const teamRef = ref(null);

const handleScroll = (el) => {
  el?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};
</script>

<style lang="scss" scoped></style>
