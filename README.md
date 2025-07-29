# Liar's Calculator

Liar's Calculator is a website allowing you to check the exact probability of a player's guess being correct
in a liar's poker card game. It also features a description of the game rules
and a poker hand ranking advised according to probability.
All the probability data presented on this website has been calculated using a Python script available
on [GitHub](https://github.com/MatWojewodzki/liars-poker-probabilities/blob/main/probability_data_generator.py).

## Disclaimer

The probability data provided on this website has not been verified for accuracy or completeness.
The website is intended for educational and illustrative purposes only — not as gambling advice
or a guarantee of outcomes.

## Running the website locally

1. Clone the git repository:
    ```bash
   git clone https://github.com/MatWojewodzki/liars-calculator
   cd liars-calculator/
   ```

2. Install the required dependencies by running:

    ```bash
    npm install
    ```

3. Start a local development server using Vite by running:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5000/`.

5. Optional: To build the project for production, use:

    ```bash
    npm run build
    ```

6. After building, you can serve the production build locally by using:

    ```bash
    npm run preview
    ```

## License

The source code is licensed under the [MIT License](LICENSE).

The website content (text, plots and data) is licensed under the
[Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/).