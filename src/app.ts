class conversion 
{
    public binaryToDecimal(number: string)
    {
        let result = 0;
        let bit = 0;
        let n = number.length -1;

        while(n >= 0) 
        {
            if (number.charAt(n) == '1')
            {
                result += (1 << (bit))
            }
            n = n -1;

            bit++;
        }
        console.log("Binary: " +number, " Decimal: " +result);
    }
    public static main()
    {
        let task = new conversion();
        task.binaryToDecimal("01111111000000000000000000000001");
    }
}
conversion.main();

const Decimal = 0;

const int32ToIp = (Decimal: any) => {
    return (Decimal >>> 24 & 0xFF) + '.' +
    (Decimal >>> 16 & 0xFF) + '.' +
    (Decimal >>> 8 & 0xFF) + '.' +
    (Decimal & 0xFF);
};
console.log("IP: " +int32ToIp(Decimal));