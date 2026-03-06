import { Card } from "./Card"
import { Text } from "./Text"

export function History() {
    return (
        <Card className="w-full py-10 px-8">
            <Text as="h1" variant="heading" className="mb-4">
                Histórico de operações
            </Text>

            <ul>
                <Text as="li">1 + 1 = 2</Text>
                <Text as="li">2 + 2 = 4</Text>
                <Text as="li">4 + 4 = 8</Text>
            </ul>
        </Card>
    )
}