import { useEffect } from 'react';
import { View } from 'react-native';
import InputField from '@/components/shared/InputField';
import { showMessage } from 'react-native-flash-message';
import { useAuthFacade } from '@/store/auth/useAuthFacade';
import { Button, Divider, Layout, Spinner, Text, TopNavigation } from '@ui-kitten/components';
import useLoginForm from '@/hooks/forms/useLoginForm';
import Loading from '@/components/shared/Loading';


interface IProps { }

export default function Login({ }: IProps) {

    const { loading, success, error, resetStore } = useAuthFacade();

    const { fields, handleFormChange, submitHandler, validationErrors } = useLoginForm();

    useEffect(() => {
        resetStore();

        if (success) {
            showMessage({ message: 'Inicio de sesión exitoso', type: 'success' });
        }

        if (error) {
            showMessage({ message: 'Error iniciando sesión. Contacte administrador.', type: 'danger' });
        }
    }, [error, resetStore, success]);

    return (
        <>
            <TopNavigation title='Login' alignment='center' />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h5' style={{ paddingVertical: 20 }}>Ingresa con tus credenciales</Text>
                <View style={{ flex: 1 }}>
                    <InputField
                        label='Nombre de usuario'
                        value={fields.username}
                        onChangeText={(text) => handleFormChange(text, 'username')}
                        style={{
                            borderWidth: 1,
                            width: '90%',
                            marginBottom: 10,
                        }}
                    />
                    <InputField
                        label='Contraseña'
                        value={fields.password}
                        onChangeText={(text) => handleFormChange(text, 'password')}
                        secureTextEntry={true}
                        style={{
                            borderWidth: 1,
                            width: '90%',
                            marginBottom: 20,
                        }}
                    />
                    {
                        validationErrors.length > 0 && (
                            <Text style={{ marginBottom: 20 }} status='danger'>
                                {validationErrors[0]}
                            </Text>
                        )
                    }
                    {
                        loading ? (
                            <Loading />
                        ) : (
                            <Button
                                style={{ flexWrap: 'wrap' }}
                                disabled={fields.username.length === 0 || fields.password.length === 0}
                                onPress={submitHandler}>
                                Iniciar Sesión
                            </Button>

                        )
                    }
                </View>
            </Layout>
        </>
    );
}
