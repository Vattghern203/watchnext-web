import { Button, Chip } from "@/components/atoms"
import { Card } from "@/components/molecules"


function TesteArea() {

    return (

        <>
            <Button.Root variant="cta">
                HELLO
            </Button.Root>

            <Chip.Root>
                test
                
            </Chip.Root>

            <Card.Root>
                <Card.Content>
                    CARD
                    <img src="/static/inception.jpg" alt="" />
                </Card.Content>
            </Card.Root>
        </>

    )
}

export default TesteArea