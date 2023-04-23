<script>
    // Rain.com API integration
    async function purchaseCrypto(asset, amount) {
        const result = await rainIntegration.purchase(asset, amount);
        return result;
    }