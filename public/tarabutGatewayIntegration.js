   // Tarabut Gateway API integration
   async function bankTransaction(accountFrom, accountTo, amount) {
    const result = await tarabutGatewayIntegration.transfer(accountFrom, accountTo, amount);
    return result;
}
</script>