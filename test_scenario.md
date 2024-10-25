Wysyłanie formularza rejestracyjnego

Scenariusz ma na celu sprawdzenie czy wszystkie pola formularza rejestracyjnego aplikacji można poprawnie uzupełnić i złożyć formularz używając przycisku "Zarejestruj".
Zestaw testów obejmuje główny test przechodzący pełną pozytywną ścieżkę do momentu pojawienia się informacji o sukcesie rejestracji i 2 testy z negatywną ścieżką sprawdzające czy pojawiają się odpowiednie komunikaty w przypadku podania złych wartości.

Test 1 - ścieżka pozytywna

Sprawdzenie czy formularz jest wysyłany po poprawnym wypełnieniu.

Kroki:

1. Uzupełnić pola Imię, Nazwisko, Adres email, hasło oraz powtórz hasło używając dopuszczonych znaków.
2. Wybrać datę urodzenia.
3. Wybrać język.
4. Uzupełnić pole Numer telefonu używając cyfr.
5. Zaznaczyć polę "Akceptuję regulamin oraz politykę prywatności"
6. Kliknąć przycisk "Zarejestruj"
7. Sprawdzić wiadomość widoczną na ekranie.

Oczekiwany rezultat:

Formularz zostaje przyjęty. Na ekranie wyświetlana jest wiadomość: "dziękujemy za rejestrację"

Test 2 - ścieżka negatywna

Sprawdzenie czy formularz wyświetla wiadomość jeśli nie jest zaznaczona zgoda na akceptację warunków regulaminu.

Kroki:

1. Uzupełnić pola Imię, Nazwisko, Adres email, hasło oraz powtórz hasło używając dopuszczonych znaków.
2. Wybrać datę urodzenia.
3. Wybrać język.
4. Uzupełnić pole Numer telefonu używając cyfr.
5. Nie zaznaczać pola "Akceptuję regulamin oraz politykę prywatności"
6. Kliknąć przycisk "Zarejestruj"
7. Sprawdzić wiadomość widoczną na ekranie.

Oczekiwany rezultat:

Formularz nie zostaje przyjęty. Przy przycisku "Akceptuję regulamin oraz politykę prywatności" wyświetla się wiadomość "To pole jest wymagane".

Test 3 - ścieżka negatywna

Sprawdzenie czy formularz podaje informację o wymaganiach dotyczących hasła.

1. Uzupełnić pola Imię, Nazwisko, Adres email używając dopuszczonych znaków.
2. Uzupełnić pole hasło uzywając tylko małych liter.
3. Sprawdzić wiadomość widoczną na ekranie.

Oczekiwany rezultat:

Po wpisaniu hasła nie spełniającego wymogów jest wyświetlana wiadomość "Hasło musi zawierać: co najmniej 8 znaków, dużą literę, liczbę, znak specjalny!"
