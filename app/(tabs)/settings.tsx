import { useAuthFacade } from '@/store/auth/useAuthFacade'
import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'

const Settings = () => {
    const {  logout} = useAuthFacade();
    return (
        <Layout style={{ flex: 1, padding: 10 }}>
            <Text category='h4' style={{ alignSelf: 'center', paddingVertical: 10 }}>Configuración</Text>
            <Button status='danger' style={{marginVertical: 20}} onPress={logout}>
                Cerrar sesión
            </Button>
        </Layout>
    )
}

export default Settings