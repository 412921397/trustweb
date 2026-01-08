<template>
  <div>
    <div class="default-transition bg-trustBlue text-trustWhite px-10 py-12 rounded-[20px]">
      <div class="text-[50px] leading-[1.1]">Trust Wallet Privacy Notice</div>
      <div class="text-[16px] mt-8">Last Updated: Mar 24, 2025</div>
    </div>
    <div class="default-transition mt-8 break-all">
      This Cookie Notice describes how Trust Wallet (“Trust Wallet”, “we,” “our,” or “us”) uses “cookies” and other similar technologies, in
      connection with our websites (the “Site”) and applications or other services (collectively, together with the Website and the Apps, our
      “Service”).
      <br />
      We use cookies to enhance your user experience and ensure security. When you visit the Site, you will be asked to accept or reject non-essential
      cookies, and you can also adjust your cookie settings to customize your privacy preferences.
      <br />
      This Cookies Notice applies in addition to any other terms and policies as published on the website, including, the Privacy Notice and the Terms
      of Use.
    </div>
    <div class="default-transition mt-8 break-all font-bold flex flex-col gap-2">
      <span class="cursor-pointer" @click="handleScroll(cookiesRef)">What are cookies?</span>
      <span class="cursor-pointer" @click="handleScroll(technologiesRef)">Why do we use cookies and similar technologies?</span>
      <span class="cursor-pointer" @click="handleScroll(walletRef)">What types of cookies does Trust Wallet use?</span>
      <span class="cursor-pointer" @click="handleScroll(noticeRef)">Changes to our Cookie Notice</span>
      <span class="cursor-pointer" @click="handleScroll(contactRef)">Contact Information to Privacy Team</span>
      <span class="cursor-pointer" @click="handleScroll(additionalRef)">Additional Resources</span>
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="cookiesRef" class="font-bold text-trustBlue dark:text-trustGreen mb-2.5 scroll-mt-[100px]">What are cookies?</div>
      Cookies are small text files that are placed into user’s device when you visit a website, downloaded to your computer or mobile device when you
      visit a site and allow a site to recognize your device. Cookies store information about the user’s visit, which may include content viewed,
      language preference, time and duration of each visit and advertisement accessed.
      <br />
      Cookies managed by Trust Wallet only are called “first party cookies” whereas cookies from third parties are called “third party cookies”.
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="technologiesRef" class="font-bold text-trustBlue dark:text-trustGreen mb-2.5 scroll-mt-[100px]">
        Why do we use cookies and similar technologies?
      </div>
      Cookies are a useful mechanism that do a lot of different jobs, such as ensuring the website is secure and reliable, enhancing user experience
      and improving website and services.
      <br />
      We may use cookies to:
      <br />
      <ul class="mt-3! list-disc ml-4!">
        <li>ensure that our website and services function properly</li>
        <li>detect and prevent fraud</li>
        <li>understand how visitors use and engage with our websites and applications</li>
        <li>analyze and improve our services.</li>
      </ul>
      <div class="mt-3">
        Some cookies, web beacons and other tracking and storage technologies that we use are from third party companies (third party cookies) to
        provide us with web analytics and intelligence about our sites which may also be used to provide measurement services.
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div class="font-bold text-trustBlue dark:text-trustGreen mb-2.5">What if I don’t want cookies or similar tracking technologies?</div>
      You have the right to manage your cookie preferences through our “Cookie Preference Center” or your browser settings, as detailed in the
      "Additional Resources" section below. To remove existing cookies from your device, you can use your browser’s options. If you wish to block
      future cookies, you can adjust your settings accordingly. Please be aware that deleting or blocking cookies may affect your user experience. You
      can adjust your cookie settings anytime by clicking the button below.
      <br />
      <n-button>Cookie Prefenrences</n-button>
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="walletRef" class="font-bold text-trustBlue dark:text-trustGreen mb-2.5 scroll-mt-[100px]">
        What types of cookies does Trust Wallet use?
      </div>
      The cookies used on Trust Wallet sites have been categorized as per the table below. However, it is important to note that not all cookies may
      be used in all jurisdictions or websites.
    </div>
    <div class="mt-8 break-all default-transition bg-[#f4f4f7]! dark:bg-trustBlack! rounded-[20px] px-6 py-6 border border-[#e0e0e0]">
      <div class="flex flex-row justify-between items-center font-bold">
        <div class="w-[50%]">Category</div>
        <div class="w-[50%]">Description</div>
      </div>
      <div class="flex flex-row justify-between mt-8">
        <div class="w-[50%]">Strictly Necessary cookies</div>
        <div class="w-[50%]">
          These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to
          actions made by which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can
          set your browser to block or alert you about these cookies, but some parts of the site will not work. These cookies do not store any
          personally identifiable information.
        </div>
      </div>
      <div class="flex flex-row justify-between mt-8">
        <div class="w-[50%]">Performance cookies</div>
        <div class="w-[50%]">
          These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know
          which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated
          and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site and will not be able to monitor
          its performance.
        </div>
      </div>
      <div class="flex flex-row justify-between mt-8">
        <div class="w-[50%]">Functionality cookies</div>
        <div class="w-[50%]">
          These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by a third-party provider
          whose services we have added to our pages. If you don’t allow these cookies some services may not function properly.
        </div>
      </div>
      <div class="flex flex-row justify-between mt-1">
        <div class="w-[50%]">Targeting cookies</div>
        <div class="w-[50%]">
          Targeting cookies may be set through our site by our advertising partners. They can be used by these third parties to build a profile of
          your interests based on the browsing information they collect from you, which includes uniquely identifying your browser and terminal
          equipment. If you do not allow these cookies you will still see basic advertising on your browser that is generic and not based on your
          interests
        </div>
      </div>
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="noticeRef" class="font-bold text-trustBlue dark:text-trustGreen mb-2.5 scroll-mt-[100px]">Changes to our Cookie Notice</div>
      We may update this Cookie Notice from time to time. Please refer to the “Last updated” date at the top of this page to see when this Cookie
      Notice was last revised. Please review this Privacy Notice regularly to ensure that you are aware of its terms. Your continued use of our
      Services after an amendment to our Privacy Notice constitutes your acceptance to the revised or amended terms.
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="contactRef" class="font-bold text-trustBlue dark:text-trustGreen mb-2.5 scroll-mt-[100px]">Contact Information of Privacy Team</div>
      For any privacy-related inquiries, please reach out to us via our online form.
      <br />
      For any other Wallet App-related inquiries and customer support, please click here to contact our support for assistance.
      <br />
      Kindly note that we may not be able to respond to non-data privacy requests submitted via this email or online form. Thank you for your
      understanding.
    </div>
    <div class="mt-8 break-all default-transition">
      <div ref="additionalRef" class="font-bold text-trustBlue dark:text-trustGreen mb-2.5 scroll-mt-[100px]">Additional Resources</div>
      The following links explain how to access cookie settings in various browsers:
      <br />
      <ul class="mt-3! list-disc ml-4!">
        <li class="text-trustBlue dark:text-trustGreen cursor-pointer">Cookie settings in Google Chrome</li>
        <li class="text-trustBlue dark:text-trustGreen cursor-pointer">Cookie settings in Microsoft Edge</li>
        <li class="text-trustBlue dark:text-trustGreen cursor-pointer">Cookie settings in Firefox</li>
        <li class="text-trustBlue dark:text-trustGreen cursor-pointer">Cookie settings in Safari (OS X)</li>
        <li class="text-trustBlue dark:text-trustGreen cursor-pointer">Cookie settings in Safari (iOS)</li>
        <li class="text-trustBlue dark:text-trustGreen cursor-pointer">Cookie settings in Android</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cookiesRef = ref(null);
const technologiesRef = ref(null);
const walletRef = ref(null);
const noticeRef = ref(null);
const contactRef = ref(null);
const additionalRef = ref(null);

const handleScroll = (el) => {
  el?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};
</script>

<style lang="scss" scoped></style>
