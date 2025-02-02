const newHeading = `
    <h1 class="animate__animated animate__fadeInUp custom-dlay-heading max-w-full w-[285px] md:w-full text-[35px] md:text-[48px] font-semibold md:font-bold leading-[50px] md:leading-[70px]" style="color:#ffffff;">ملابس تحكي <span style="color: var(--color-primary)">بـــراءة</span> الطفــــــــــولة!</h1>
`;

const replacedHeading = document.querySelector('section:first-of-type h1');
replacedHeading.style.display = "none";
const heroContainer = document.querySelector('section:first-of-type .txt');
heroContainer.insertAdjacentHTML('afterbegin', newHeading);