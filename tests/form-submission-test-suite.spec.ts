import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    await page.goto('localhost:8080');
  });

test.afterEach(async ({ page }) => {
console.log(`Finished ${test.info().title} with status ${test.info().status}`);

if (test.info().status !== test.info().expectedStatus)
    console.log(`Did not run as expected, ended at ${test.info().errors}`);
});

test.describe('Form submission test suite', () => {

    test('positive route', async ({ page }) => {
        await expect(page).toHaveTitle('Formularz testowy - Panowie Programiści');
        const successMessage = page.getByRole('heading', { name: 'dziękujemy' });

        await fillCredentials(page);
        await pickDateOfBirth(page);
        await pickLanguage(page);
        await providePhoneNumber(page);
        await acceptTerms(page);
        await submitForm(page);

        await expect(successMessage).toHaveText('Jack, dziękujemy za rejestrację!');
    });

    test('terms and conditions unchecked', async ({ page }) => {
        await expect(page).toHaveTitle('Formularz testowy - Panowie Programiści');
        const errorMessage = page.getByText('To pole jest wymagane');
        
        await fillCredentials(page);
        await pickDateOfBirth(page);
        await pickLanguage(page);
        await providePhoneNumber(page);
        await submitForm(page);

        await expect(errorMessage).toHaveText('To pole jest wymagane');
    })

    test('set incorrect password', async ({ page }) => {
        await expect(page).toHaveTitle('Formularz testowy - Panowie Programiści');
        const errorMessage = page.getByText('Hasło musi zawierać');
        
        await fillIncorrectCredentials(page);

        await expect(errorMessage).toHaveText('Hasło musi zawierać: dużą literę, liczbę, znak specjalny!');
    })
});

async function fillCredentials(page: Page) {
    const name = page.getByPlaceholder('Imię');
    const surname = page.getByPlaceholder('Nazwisko');
    const setEmail = page.getByPlaceholder('Twój adres e-mail');
    const setPass = page.getByPlaceholder('Hasło', { exact: true });
    const repeatPass = page.getByPlaceholder('Powtórz Hasło');

    console.log('filling name, email and password fields');
    await name.fill('Jack');
    await surname.fill('Torrance');
    await setEmail.fill('jack.torrance@overlook.com');
    await setPass.fill('PA$$w0rd');
    await repeatPass.fill('PA$$w0rd');   
}

async function fillIncorrectCredentials(page: Page) {
    const name = page.getByPlaceholder('Imię');
    const surname = page.getByPlaceholder('Nazwisko');
    const setEmail = page.getByPlaceholder('Twój adres e-mail');
    const setPass = page.getByPlaceholder('Hasło', { exact: true });
    const repeatPass = page.getByPlaceholder('Powtórz Hasło');

    console.log('filling name, email and password fields');
    await name.fill('Jack');
    await surname.fill('Torrance');
    await setEmail.fill('jack.torrance@overlook.com');
    await setPass.fill('password');
    await repeatPass.fill('password'); 
}

async function pickDateOfBirth(page: Page) {
    const date = page.getByPlaceholder('Data urodzenia');

    console.log('picking date of birth')
    await date.fill('2001-01-01');
    await date.press('Enter');
}

async function pickLanguage(page: Page) {
    const datePicker = page.getByRole('combobox', { name:'Język'});
    console.log('picking language');
    await datePicker.click();
    await page.keyboard.press('p');
    await page.keyboard.press('o');
    await page.keyboard.press('Enter');
}

async function providePhoneNumber(page: Page) {
    const phoneNumber = page.getByPlaceholder('Numer telefonu');
    console.log('filling phone number field');
    await phoneNumber.fill('666666666');
}

async function acceptTerms(page: Page) {
    const termsCheck = page.locator('form div').filter({ hasText: 'Akceptuję regulamin oraz' }).locator('div');
    console.log('accepting terms and conditions')
    await termsCheck.click();
}

async function submitForm(page: Page) {
    const submit = page.getByRole('button', { name: 'Zarejestruj' });
    await submit.click();
}