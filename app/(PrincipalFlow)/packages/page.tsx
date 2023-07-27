import React, { FC } from 'react';
import { GeneralCard } from '../../../components/ui/generalCard';
import { SelectPackages } from '../../../components/ui/select-packages';
import { IPackcage } from '../../../interfaces/IPackage';

const packages: IPackcage[] = [
    {
        address: 'Amenabar 2356',
        city: 'CABA',
        available: true,
        quantity: 2,
    },
    {
        address: 'Av Carabobo y Rivadavia',
        city: 'CABA',
        available: true,
        quantity: 4,
    },
    {
        address: 'Melian 1242',
        city: 'CABA',
        available: true,
        quantity: 1,
    },
    {
        address: 'Castillo 670',
        city: 'CABA',
        available: true,
        quantity: 2,
    },
    {
        address: 'Gorriti 4595',
        city: 'CABA',
        available: false,
        quantity: 3,
    },
    {
        address: 'Av. Gral. Mosconi 1056',
        city: 'CABA',
        available: false,
        quantity: 1,
    },
    {
        address: 'Tacuarí 1797',
        city: 'CABA',
        available: false,
        quantity: 1,
    },
];

const InitWorkDay: FC = () => {
    return (
        <GeneralCard title='Obtener paquetes'>
            <h2
                style={{
                    color: '#3D1DF3',
                    fontFamily: 'Poppins',
                    fontSize: '18px',
                    textAlign: 'center',
                    fontStyle: 'normal',
                }}
            >
                ¿Cuántos paquetes repartirás hoy?
            </h2>
            <div
                style={{
                    borderTop: '2px dotted #3D1DF3',
                    borderSpacing: '3px',
                    margin: 10,
                }}
            ></div>
            {packages.map((pack, i) => (
                <SelectPackages key={i} pack={pack} />
            ))}
        </GeneralCard>
    );
};

export default InitWorkDay;
