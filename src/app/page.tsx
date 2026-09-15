import { NAME } from '@/app/(config)/constants';
import {
    Circled,
    Highlighted,
    Noted,
    ScribbleFilter,
    Squiggled,
    Struck,
} from '@/app/(signup)/marks';
import { SignupForm } from '@/app/(signup)/signup-form';
import '@/app/(signup)/signup.css';

export default function SignupPage() {
    return (
        <main className="page">
            <ScribbleFilter />
            <div className="content">
                <p className="paragraph">
                    <strong className="name">{NAME}</strong> is a letter I send{' '}
                    <Noted note="(ish)" then=".">
                        sometimes
                    </Noted>{' '}
                    I use it to avoid pondering{' '}
                    <Circled then="">big thoughts</Circled> alone, suppress the{' '}
                    <Struck then=",">imminent dread</Struck> and to be
                    intentionally thrilled about{' '}
                    <Squiggled then=".">cool internet finds</Squiggled>{' '}
                </p>
                <p className="paragraph">
                    tldr; newsletter with{' '}
                    <Highlighted then="">thoughts</Highlighted> and{' '}
                    <Highlighted then=".">fun links</Highlighted>
                </p>
                <SignupForm />
            </div>
        </main>
    );
}
