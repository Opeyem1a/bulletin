import { NAME } from '@/app/(config)/constants';
import {
    Circled,
    Highlighted,
    Noted,
    Squiggled,
    Struck,
} from '@/app/(signup)/marks';
import { SignupForm } from '@/app/(signup)/signup-form';
import '@/app/(signup)/signup.css';

export default function SignupPage() {
    return (
        <main className="page">
            <div className="content">
                <p className="paragraph">
                    <strong className="name">{NAME}</strong> is a letter I send{' '}
                    <Noted note="(ish)" then=".">
                        every so often
                    </Noted>{' '}
                    I use it to work through the{' '}
                    <Circled then=",">big thoughts</Circled> see past{' '}
                    <Struck then=",">the dread</Struck> and choose to get
                    excited about{' '}
                    <Squiggled then=".">small cool things</Squiggled> Each one
                    has{' '}
                    <Highlighted section="notes" then=",">
                        notes
                    </Highlighted>{' '}
                    <Highlighted section="changed-mind" then=",">
                        a changed mind
                    </Highlighted>{' '}
                    <Highlighted section="found">things I found</Highlighted>{' '}
                    and{' '}
                    <Highlighted section="question" then=".">
                        one question
                    </Highlighted>
                </p>
                <SignupForm />
            </div>
        </main>
    );
}
